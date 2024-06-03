// element seçme
const aramaButonu= document.querySelector("#aramaButonu");
const sehirIsmiEL= document.querySelector(".sehirIsmi");
const dereceEL= document.querySelector(".derece");
const durumEL = document.querySelector(".durum");

aramaButonu.addEventListener("keypress" ,bilgileriBul );

const weatherApi = new weaterAP();

function bilgileriBul(e){
 if(e.keyCode=='13'){
    const cityName = aramaButonu.value.trim();
    weatherApi.getWeatherInfo(cityName)
    .then(data=>
       display(data)
    )
    .catch(err=>console.log(err))
 }
 
}

function display(data){
   sehirIsmiEL.textContent=data.name;
   dereceEL.textContent=Math.round(data.main.temp) + "°";
   durumEL.textContent=data.weather[0].description;

   aramaButonu.value= " ";
}