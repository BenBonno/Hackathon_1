const express = require('express')
const cors = require('cors');


const route = express()
route.use(cors({
    origin: '*'
}))
const { GetCountryById, GetRegionById, GetCityByName, GetNameOfRegion,GetCityGeoDistance} = require('../Service/database')


route.get('/', (req, res) => {
    res.send('Hello World!')
})

route.get('/Country/:id', (req, res) => {
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
    console.log(req.query)
    const Offset = parseInt(req.query.Offset) ||0;
    const Limit = parseInt(req.query.Limit) ||0;
    
    GetRegionById(RegionID).then((response) => {
            Promise.all(
                response.map(async (City) => {
                    const Country = await GetCountryById(City.CountryID)
                    const Region = await GetNameOfRegion(RegionID)

                    return { CountryName: Country[0].Country,Region:Region[0].Region, ...City }
                })
            ).then((data) => {
                const result = data.filter(item => item)
                        if(parseInt(req.query.Limit) >= result.length || req.query.Limit === undefined){
                            res.send(result)
                        }else{
                            res.send(result.slice(Offset,Offset+parseInt(req.query.Limit)))
                        }
            })

        

    }).catch(() => {
        res.status(404).json({ Error: 'No Region as this ID' })
    })
})

//












function PaysQuery(req, res, next) {
    if (req.query.Pays) {
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

                    
                        const Offset = parseInt(req.query.Offset)||0
                        const result = data.filter(item => item)
                        if(result.length > 1){
                            if(parseInt(req.query.Limit) >= result.length || req.query.Limit === undefined){
                                res.send(result)
                            }else{
                                res.send(result.slice(Offset,Offset+parseInt(req.query.Limit)))
                            }
                        }else{
                            
                            GetCityGeoDistance(req.query.GeoLimit,{lat:result[0].Latitude,lng:result[0].Longitude},req.query.Limit,req.query.Offset,0.01).then((el)=>{
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
    console.log(req.query)
    GetCityByName(req.params.name).then(async (response) => {
        Promise.all(
            response.map(async (City) => {
                const Country = await GetCountryById(City.CountryID)
                return { CountryName: Country[0].Country, ...City }
            })
        )
            .then((data) => {
                const Offset = parseInt(req.query.Offset)||0
                const result = data.filter(item => item)
                        if(parseInt(req.query.Limit) >= result.length || req.query.Limit === undefined){
                            res.send(result)
                        }else{
                            res.send(result.slice(Offset,Offset+parseInt(req.query.Limit)))
                        }
            })

    }).catch(()=>{
        res.status(404).json({ Error: 'No City as this Name' })
    })
})





module.exports = { route };