class weaterAP{
    constructor(){
        this.baseURL="https://api.openweathermap.org/data/2.5/weather"
        this.apikey="c08cb017c13cdd3c06819b1706da49e0"
    }

    getWeatherInfo(cityName){
        return new Promise((resolve , reject)=>{
            fetch(`${this.baseURL}?q=${cityName}&appid=${this.apikey}&units=metric&lang=tr `)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
        })
    }
}