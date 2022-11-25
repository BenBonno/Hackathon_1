const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./db.sqlite");

async function  GetCountryById(CountryId){
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM countries where CountryId = ${CountryId}`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}
async function  GetRegionById(RegionID){
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM cities where RegionID = ${RegionID}`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}

async function  GetNameOfRegion(RegionID){
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM regions where RegionID = ${RegionID}`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}


async function  GetCityByName(str){
    const name = str[0].toUpperCase() + str.slice(1,)
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM cities where City like "${name}%"`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}






async function  GetCityGeoDistance(GeoLim="1",{lat,lng},Limit=100 ,OFFSET=0,Deg){
    const GeoLimit = parseInt(GeoLim) * Deg
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM cities where Latitude < ${lat+GeoLimit} and Latitude > ${lat-GeoLimit} and Longitude > ${lng-GeoLimit} and Longitude < ${lng+GeoLimit} LIMIT ${Limit} OFFSET ${OFFSET};`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}










module.exports={db,GetCountryById,GetRegionById,GetCityByName,GetNameOfRegion,GetCityGeoDistance};
