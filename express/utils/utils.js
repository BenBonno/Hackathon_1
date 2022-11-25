function GetDistance({PointA_lat,PointA_Lgn},{PointB_lat,PointB_Lgn}){

    // Radius in Km
const radiusEarthKm = 6371.07103;
// Convert degrees to radians
const radiusLatFrom = PointA_lat * (Math.PI /180);
const radiusLatTo = PointB_lat * (Math.PI /180);
// Radian difference (latitudes)
const latDiff = radiusLatTo - radiusLatFrom;
// Radian difference (longitudes)
const lngDiff = (PointB_Lgn - PointA_Lgn) * (Math.PI /180);
// Distance
const distance = 2 * radiusEarthKm * Math.sin(Math.sqrt(Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(radiusLatFrom) * Math.cos(radiusLatTo) * Math.sin(lngDiff/2)*Math.sin(lngDiff/2)));
return distance;
}

module.exports = { GetDistance };