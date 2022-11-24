const express = require('express')
const route = express()
const { db, GetCountryById, GetRegionById, GetCityByName } = require('../Service/database')


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
    GetRegionById(RegionID).then((response) => {
        res.send(response)

    }).catch(() => {
        res.status(404).json({ Error: 'No Region as this ID' })
    })
})

function PaysQuery(req, res, next) {
    if (req.query.Pays) {
        GetCityByName(req.params.name)
            .then(async (response) => {
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
                        res.send(data.filter(item => item))
                    })
                    .catch((e) => {
                        console.log(e)
                    })

            })
    } else {
        next();
    }
}
route.get('/City/:name', PaysQuery, (req, res) => {
    GetCityByName(req.params.name).then(async (response) => {
        Promise.all(
            response.map(async (City) => {
                const Country = await GetCountryById(City.CountryID)
                return { CountryName: Country[0].Country, ...City }
            })
        )
            .then((data) => {
                res.send(data)
            })

    })
})

module.exports = { route };