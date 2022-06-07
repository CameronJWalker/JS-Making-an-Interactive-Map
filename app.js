// map object
const theMap = {
    coordinates: [],
	businesses: [],
	map: {},
	markers: {},
}


// get coordinates via geolocation api
async function coordinates(){
    const pos = await new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
}
// get foursquare businesses

// process foursquare array

// event handlers
// window load

// business submit button

//fsq36IKCED97kpj7hJ+MMVeFc/XDhf1ZpcwHq7WjIMYpg0Q= api key