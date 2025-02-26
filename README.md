# SkyCast - Weather Web App

### 🌦 Live Demo: [SkyCast](https://vivek-rvt.github.io/SkyCast---weather-web-app/)

## 📌 Overview
SkyCast is a simple weather app that shows real-time weather details like temperature, humidity, wind speed, and conditions for any location using WeatherAPI.

## 🚀 Features
- 🌍 Search weather for any city
- ☁️ Displays real-time temperature, humidity, wind speed, and condition
- 🎨 Responsive and easy-to-use design
- 🔄 Updates data without reloading the page

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **API:** [WeatherAPI](https://www.weatherapi.com/)

## 🏗 Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Vivek-RVT/SkyCast---weather-web-app.git
   ```
2. Open `index.html` in your browser or use a local server:
   ```sh
   live-server
   ```

## ❗ Fix for Mixed Content Error
If you see an error about "Mixed Content," update your API request to use HTTPS:
```js
const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=City&aqi=no`;
```

## 💬 Connect with Me
- **GitHub:** [Vivek-RVT](https://github.com/Vivek-RVT)
- **LinkedIn:** [Vivek Rawat](https://www.linkedin.com/in/vivek-rawat-763234341)
- **Twitter:** [@vivekrvt1136k](https://twitter.com/vivekrvt1136k)

---
### ⭐ If you like this project, give it a star on GitHub!
```sh
git add .
git commit -m "Updated README"
git push origin main
```

