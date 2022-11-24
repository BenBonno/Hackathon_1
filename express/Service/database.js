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

async function  GetCityByName(str){
    const name = str[0].toUpperCase() + str.slice(1,)
    return new Promise(function(resolve,reject){
        db.all(`SELECT * FROM cities where City like "${name}%"`, function(err,rows){
           if(err || rows.length==0){return reject(err);}
           resolve(rows);
         });
    });
}

module.exports={db,GetCountryById,GetRegionById,GetCityByName};
