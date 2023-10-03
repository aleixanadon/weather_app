let mock = {
    coord: {
        lon: -0.1257,
        lat: 51.5085
    },
    weather: [
        {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
        }
    ],
    base: "stations",
    main: {
        temp: 289.44,
        feels_like: 289,
        temp_min: 287.51,
        temp_max: 291.13,
        pressure: 1018, humidity: 72
    },
    visibility: 10000,
    wind: {
        speed: 5.66, deg: 260
    },
    clouds: {
        all: 20
    },
    dt: 1696328783,
    sys: { 
        type: 2, 
        id: 2006068, 
        country: "GB", 
        sunrise: 1696313014, 
        sunset: 1696354534 
    }, 
    timezone: 3600, 
    id: 2643743, 
    name: "London", 
    cod: 200
}

export default mock