


const apiKey="318d281c54bbed4336886d6e12e3a6f8";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".searchbox input ");
const searchButton=document.querySelector(".searchbox span ");

async function checkWeather(city){
    const response= await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C."
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
        
    document.querySelector('.speed').innerHTML=data.wind.speed+"Km/hr"
}

searchButton.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})




