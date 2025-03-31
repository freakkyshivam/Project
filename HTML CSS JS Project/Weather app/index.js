 
 const button = document.getElementById("getWeather");
 const input = document.getElementById("city");
  const home = document.getElementById("home");


 // https://api.weatherapi.com/v1/current.json?key=8ef35508b1c44471998103733253003&q=Kanpur&aqi=yes

 const getdata = async (city) => {
     const url = `https://api.weatherapi.com/v1/current.json?key=8ef35508b1c44471998103733253003&q=${city}&aqi=yes`;
     const response = await fetch(url);
     const data = await response.json();
     return data;
 }

 button.addEventListener("click", async () => {
      await weather();
        
    })

      input.addEventListener("keypress", async (event) => {
         if (event.key === "Enter") {
            await weather();
         }
      }
      )

     async  function  weather(){
         const city = input.value;
         const data =await getdata(city);
         console.log(data);
         
         // weatherIcon.src = data.current.condition.icon;
         // locationName.innerText = `Location Info : ${data.location.name}, ${data.location.region}, ${data.location.country}`;
        
   
         let div = document.createElement("div");
         div.innerHTML = `
         <div class="weather-info" id="weatherInfo">
            <div class="header-container">
                <div class="header-left">
                    <label for="name">Now</label>
                    <h1 id="temperature">${data.current.temp_c} °C <img src="${ data.current.condition.icon}" alt="" srcset="" id="weatherIcon"></h1>
                    <p id="high">High : ${data.current.temp_c} °C </p>
                    <p id="low">Low : ${data.current.dewpoint_c} °C</p>
                </div>

                <div class="header-right">
                    <strong id="description">${data.current.condition.text}</strong>
                    <p id="feelsLike">Feels like :${data.current.feelslike_c} °C</p>
                    </div>
            </div>
           
            <div class="footer">
                
    <div class="parent">
                    <div class="div1">
                    <strong for="wind">Wind</strong>
                         <p id="windSpeed"> ${data.current.wind_kph} kph</p>
                             </div>

                     <div class="div2">
                     <strong for="humidity">Humidity</strong>
                <p id=  "humidity"> ${data.current.humidity} %</p>
                 </div>
                <div class="div3">
                  <strong for="pressure">Pressure</strong>
                  <p id="pressure"> ${data.current.pressure_mb} mb</p>
                     
                </div>
             <div class="div4">
             <strong for="uv">UV Index</strong>
                <p>${data.current.uv}</p>
             </div>
    </div>
    
            </div>
 

        </div>
         
         `
         home.appendChild(div);
         input.value = "";
         input.focus();
       }
         

       