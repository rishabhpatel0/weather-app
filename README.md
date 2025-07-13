# 🌦️ Weather App

A sleek and responsive **Weather Web App** built using **React + Vite**.  
This app allows users to **search weather by city** or instantly **get their current location's weather** using browser geolocation.  
Also includes lazy-loaded weather sections and a visual temperature trend rendered via **Canvas API**.


---

## 🚀 Features

- 🔍 **Search weather** by city name
- 📍 **Current Location Weather** via Geolocation API
- 🌀 **Lazy loading** using `IntersectionObserver` (only loads cards when in view)
- 📊 **Canvas-based Temperature Chart**
- 🌙 **Dark Mode UI**
- 📱 **Fully responsive** layout
- ⚡ Optimized for speed with Vite

---

## 🧪 Tech Used

| Feature                  | Stack / API                          |
|-------------------------|--------------------------------------|
| Frontend Framework      | React + Vite                         |
| Weather Data            | [OpenWeatherMap API](https://openweathermap.org/api) |
| Geolocation             | Browser's built-in `navigator.geolocation` |
| Lazy Loading            | `IntersectionObserver` API          |
| Temperature Chart       | Native HTML5 `<canvas>` API         |
| Styling                 | Pure CSS (No UI libraries used)     |

---

## 🛠️ Run Locally

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
