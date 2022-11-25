const express = require('express')
const cors = require('cors');
const { GetDistance } = require("../utils/utils")

const route = express()
route.use(cors({
    origin: '*'
}))
const { GetCityById, GetCountryById, GetRegionById, GetCityByName, GetNameOfRegion, GetCityGeoDistance } = require('../Service/database');
const { required } = require('nodemon/lib/config');


route.get('/', (req, res) => {
    res.send('Hello World!')
})

route.get('/Country/:id', (req, res) => {
    console.log(req.params.name, req.query)
    const CountryId = parseInt(req.params.id);
    console.log(CountryId)
    GetCountryById(CountryId).then((response) => {
        res.send(response)
    }).catch(() => {
        res.status(404).json({ Error: 'No Country as this ID' })
    })
})

route.get('/Region/:id', (req, res) => {
    const RegionID = req.params.id;
    console.log(req.params.name, req.query)
    const Offset = parseInt(req.query.Offset) || 0;
    const Limit = parseInt(req.query.Limit) || 0;

    GetRegionById(RegionID).then((response) => {
        Promise.all(
            response.map(async (City) => {
                const Country = await GetCountryById(City.CountryID)
                const Region = await GetNameOfRegion(RegionID)

                return { CountryName: Country[0].Country, Region: Region[0].Region, ...City }
            })
        ).then((data) => {
            const result = data.filter(item => item)
            if (parseInt(req.query.Limit) >= result.length || req.query.Limit === undefined) {
                res.send(result)
            } else {
                res.send(result.slice(Offset, Offset + parseInt(req.query.Limit)))
            }
        })



    }).catch(() => {
        res.status(404).json({ Error: 'No Region as this ID' })
    })
})

//












function PaysQuery(req, res, next) {
    if (req.query.Pays) {
        console.log(req.params.name, req.query)
        GetCityByName(req.params.name)
            .then((response) => {
                Promise.all(
                    response.map(async (City) => {
                        try {
                            const Country = await GetCountryById(City.CountryID)
                            if (Country[0].Country.includes(req.query.Pays)) {
                                return { CountryName: Country[0].Country, ...City }
                            } else {
                                return null
                            }
                        } catch (error) {
                            throw error
                        }

                    })
                )
                    .then((data) => {


                        const Offset = parseInt(req.query.Offset) || 0
                        const result = data.filter(item => item)
                        if (result.length > 1) {
                            if (parseInt(req.query.Limit) >= result.length || req.query.Limit === undefined) {
                                res.send(result)
                            } else {
                                res.send(result.slice(Offset, Offset + parseInt(req.query.Limit)))
                            }
                        } else {

                            GetCityGeoDistance(req.query.GeoLimit, { lat: result[0].Latitude, lng: result[0].Longitude }, req.query.Limit, req.query.Offset, 0.01).then((el) => {
                                res.send(el)
                            })
                        }

                    })
                    .catch((e) => {
                        console.log(e)
                    })

            })
    }

    else {
        next();
    }
}

route.get('/City/:name', PaysQuery, (req, res) => {
    console.log(req.params.name, req.query)
    GetCityByName(req.params.name).then(async (response) => {
        if (req.query.Region == "True") {
            Promise.all(
                response.map(async (City) => {
                    try {
                        const Country = await GetCountryById(City.CountryID)
                        const Region = await GetNameOfRegion(City.RegionID)
                        const RegionArray = await GetRegionById(City.RegionID)
                        const RegionResult = RegionArray.map((el) => {
                            const Distance = GetDistance(
                                { PointA_lat: City.Latitude, PointA_Lgn: City.Longitude }, 
                                { PointB_lat: el.Latitude, PointB_Lgn: el.Longitude })

                            return { ...el,Distance }
                        })

                        return { City: { CountryName: Country[0].Country, RegionName: Region[0].Region,...City}, Region: RegionResult }
                    } catch (error) {
                        const Country = await GetCountryById(City.CountryID)
                        return { City: { CountryName: Country[0].Country, ...City }, Region: [] }
                    }
                })
            )
                .then((data) => {
                    console.log(req.query)
                    const Offset = parseInt(req.query.Offset) || 0
                    const result = data.filter(item => item)
                    const City = result[0].City
                    const Region = result[0].Region
                    console.log(Region.length)
                    if (parseInt(req.query.Limit) >= Region.length || req.query.Limit === undefined) {
                        res.send({ City, Region })
                    } else {

                        res.send({ City, Region: Region.slice(Offset, Offset + parseInt(req.query.Limit)) })
                    }
                })
        } else {
            Promise.all(
                response.map(async (City) => {
                    try {
                        const Country = await GetCountryById(City.CountryID)
                        const Region = await GetNameOfRegion(City.RegionID)

                        return { City: { CountryName: Country[0].Country, RegionName: Region[0].Region,...City} }
                    } catch (error) {
                        const Country = await GetCountryById(City.CountryID)
                        return { City: { CountryName: Country[0].Country, ...City }, Region: [] }
                    }
                })
            )
            .then((data) => {
                console.log(req.query)
                const Offset = parseInt(req.query.Offset) || 0
                const result = data.filter(item => item)
                const City = result[0].City
                res.send({ City })
            })
        }

    }).catch(() => {
        res.status(404).json({ Error: 'No City as this Name' })
    })
}

)
route.get('/CityById/:id', (req, res) => {
    GetCityById(req.params.id).then(async (response) => {
        if (req.query.Region) {
            Promise.all(
                response.map(async (City) => {
                    try {
                        const Country = await GetCountryById(City.CountryID)
                        const Region = await GetNameOfRegion(City.RegionID)
                        const RegionArray = await GetRegionById(City.RegionID)
                        const RegionResult = RegionArray.map((el) => {
                            const Distance = GetDistance(
                                { PointA_lat: City.Latitude, PointA_Lgn: City.Longitude }, 
                                { PointB_lat: el.Latitude, PointB_Lgn: el.Longitude })

                            return { ...el,Distance }
                        })

                        return { City: { CountryName: Country[0].Country, RegionName: Region[0].Region,...City}, Region: RegionResult }
                    } catch (error) {
                        const Country = await GetCountryById(City.CountryID)
                        return { City: { CountryName: Country[0].Country, ...City }, Region: [] }
                    }
                })
            )
                .then((data) => {
                    console.log(req.query)
                    const Offset = parseInt(req.query.Offset) || 0
                    const result = data.filter(item => item)
                    const City = result[0].City
                    const Region = result[0].Region
                    console.log(Region.length)
                    if (parseInt(req.query.Limit) >= Region.length || req.query.Limit === undefined) {
                        res.send({ City, Region })
                    } else {

                        res.send({ City, Region: Region.slice(Offset, Offset + parseInt(req.query.Limit)) })
                    }
                })
        } else {
            Promise.all(
                response.map(async (City) => {
                    try {
                        const Country = await GetCountryById(City.CountryID)
                        const Region = await GetNameOfRegion(City.RegionID)
                        const RegionArray = await GetRegionById(City.RegionID)

                        return { City: { CountryName: Country[0].Country, RegionName: Region[0].Region,...City} }
                    } catch (error) {
                        const Country = await GetCountryById(City.CountryID)
                        return { City: { CountryName: Country[0].Country, ...City }, Region: [] }
                    }
                })
            )
            .then((data) => {
                console.log(req.query)
                const Offset = parseInt(req.query.Offset) || 0
                const result = data.filter(item => item)
                const City = result[0].City
                const Region = result[0].Region
                console.log(Region.length)
                res.send({ City })
            })
        }


    }).catch(() => {
        res.status(404).json({ Error: 'No City as this ID' })
    })
})




module.exports = { route };