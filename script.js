const apiKey = "e58d9a5cd8a84b82854172349252102";  

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector('.search-cont input');
    const searchBtn = document.querySelector('.search-button');

    let location_2 = "India";  
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location_2}&aqi=no`;

    // Fetch default weather on page load
    fetchWeather(url);

    searchBtn.addEventListener("click", () => {
        let location_1 = inputField.value; 
        url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location_1}&aqi=no`;
        fetchWeather(url);
    });

    // Menu toggle functionality
    const menu_icon = document.querySelector(".tp-icon img");
    const tp_menu = document.querySelector(".tp-menu-cont");

    menu_icon.addEventListener("click", () => {
        if (tp_menu.classList.contains("not-ac")) {
            tp_menu.style.right = "0"; // Open menu
            tp_menu.classList.remove("not-ac");
            console.log("Menu opened");
            menu_icon.src = "assit/cross.svg"
            tp_menu.style.display = "inline-block"
        } else {
            tp_menu.style.right = "-700%"; // Close menu
            tp_menu.classList.add("not-ac");
            tp_menu.style.display = "none";
            menu_icon.src = 'assit/menu.svg'
            console.log("Menu closed");
        }
    });
    document.addEventListener("click", (event) => {
      if (!tp_menu.contains(event.target) && !menu_icon.contains(event.target)) {
          tp_menu.style.right = "-650%"; 
            menu_icon.src = 'assit/menu.svg'
            tp_menu.style.display = "none";
          tp_menu.classList.add("not-ac");
          console.log("Menu Closed by Outside Click");
      }
  });
});

function fetchWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => { 
          const iconUrl = "https:" + data.current.condition.icon;

          const weather_icon = document.querySelector('.weather-icon img' );
          const cur_location = document.querySelector('.cur-location');
          const last_updateed = document.querySelector('.last-upldated');
          const temp = document.querySelector('.temp');
          const weather_stat = document.querySelector('.w-st');
          const feel_like = document.querySelector('.feel-l');
          const pfeel_like = document.querySelector('.pfeel-l')
          const pw_st = document.querySelector('.pw-st');
          const cloudStatus = document.querySelector('.cc-in');
          const cloudCover = document.querySelector('.cc-v');
          const pcloudStatus = document.querySelector('.pcc-in');
          const pcloudCover = document.querySelector('.pcc-v');
          const humidity = document.querySelector('.hum-d');
          const wind_det = document.querySelector('.win-d');
          const pre_det = document.querySelector('.pre-d');
          const dew_d = document.querySelector('.dew-d');
          const uv_d = document.querySelector('.uv-d');
          const preci_d = document.querySelector('.preci-d');
          const visi = document.querySelector('.visi-d');
          const tp_menu = document.querySelector('.tp-menu-cont');
          const day_sIMG = document.querySelector('.cur-day img');
          
         const wind_dirc = document.querySelector('.wind-dir-d');
         const wind_guest = document.querySelector('.wind-g-d');
         const wind_degre = document.querySelector('.wind-deg-d');
         const menu_icon = document.querySelector('.tp-icon img');
         
          const cur_time = document.querySelector('.time-t');
          const loca = document.querySelector('.cur-location');
         
          wind_degre.innerHTML = data.current.wind_degree+"°";
        loca.innerHTML = `${data.location.name} / ${data.location.region} / ${data.location.country  }       |           Time Zone : ${data.location.tz_id}` ;
        wind_guest.innerHTML = data.current.gust_kph +"Km/h";
        wind_dirc.innerHTML = data.current.wind_dir;
        humidity.innerHTML = data.current.humidity+"%";
        preci_d.innerHTML = data.current.precip_mm+"mm";
        // cloudCover.innerHTML = data.current.cloud+"%";
        uv_d.innerHTML = data.current.uv;
        wind_det.innerHTML = data.current.wind_kph+"Km/h";
        pre_det.innerHTML = data.current.pressure_mb+"mb";
        visi.innerHTML = data.current.vis_km+"Km";   temp.innerHTML = data.current.temp_c+" °C";
        feel_like.innerHTML = "Feels like "+data.current.feelslike_c +"°C";
        pfeel_like.innerHTML = "Feels like "+data.current.feelslike_c +"°C";
        
        let cl = cloudCover.innerHTML = data.current.cloud;
        dew_d.innerHTML = data.current.dewpoint_c+"°C";
        // cloudStatus.innerHTML ="----"
        
        if (cl >= 0 && cl <= 20) {
            cloudStatus.innerHTML= "Mostly Clear";
            pcloudStatus.innerHTML= "Mostly Clear";
        } else if (cl > 20 && cl <= 50) {
            cloudStatus.innerHTML = "Partly Cloudy";
            pcloudStatus.innerHTML = "Partly Cloudy";
        } else if (cl > 50 && cl <= 80) {
            cloudStatus.innerHTML = "Mostly Cloudy";
            pcloudStatus.innerHTML = "Mostly Cloudy";
        } else if (cl> 80) {
            cloudStatus.innerHTML = "Overcast";
            pcloudStatus.innerHTML = "Overcast";
        }
let dayS = data.current.is_day;

        if (dayS==0) {
          day_sIMG.src = "assit/night.svg"
          document.querySelector('.cur-day-tex').innerHTML = "night"
          
        }
        else{
 day_sIMG.src = "assit/uvrays.svg"
          document.querySelector('.cur-day-tex').innerHTML = "day"
        }
        // pcloudStatus.apiKey
        cloudCover.innerHTML = data.current.cloud+"%";
        pcloudCover.innerHTML = data.current.cloud+"%";
        last_updateed.innerHTML ="last updated : "+ data.current.last_updated;
          weather_stat.innerHTML = data.current.condition.text;
        pw_st.innerHTML = data.current.condition.text;
        
          cur_time.innerHTML = "";
          cur_time.innerHTML = data.location.
          localtime;
        
        
          document.querySelector('#D-mod').addEventListener('change', function() {
            const cel_fe = this.value; // Get the selected value
            if (cel_fe === "C") {
                temp.innerHTML = data.current.temp_c+" °C";
                pfeel_like.innerHTML = "Feels like "+data.current.feelslike_c +"°C";
                feel_like.innerHTML = "Feels like "+data.current.feelslike_c +"°C";
                dew_d.innerHTML = data.current.dewpoint_c+"°C";
              console.log("Celsius selected");
            } else if (cel_fe === "F") {
                temp.innerHTML = data.current.temp_f+" °F";
                pfeel_like.innerHTML ="Feels like "+data.current.feelslike_f +"°F";
                feel_like.innerHTML = "Feels like "+data.current.feelslike_f +"°F";
                dew_d.innerHTML = data.current.dewpoint_f+"°F";
              console.log("Fahrenheit selected");
            }
          });
         
          
          
          
          
         const current_time = document.querySelector('.time-t');
         
          weather_icon.src = iconUrl;
        
        
          console.log(data);
          
            console.log("hey:-",data.current.temp_c);
           
        
        
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
