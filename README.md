# Weather App (ReactJS)

## Project Description

This weather app provides real-time weather information based on the user's location or by searching for a specific city. It features a clean and responsive design with support for both light and dark modes. The app also provides an hourly weather forecast and a 5-day forecast using the OpenWeatherMap API.

---

## Features

- **Geolocation Support** – Automatically fetch weather based on user's location.
- **City Search** – Search for weather conditions in any city worldwide.
- **Hourly Forecast** – Get weather data for the next few hours.
- **5-Day Forecast** – Displays weather for the upcoming 5 days.
- **Dark/Light Mode** – Toggle between dark and light modes for better accessibility.
- **Responsive Design** – Fully responsive for desktop and mobile devices.

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required NPM Packages

```bash
npm install axios styled-components react-switch react-geolocated
```

- **axios** – For making HTTP requests to the OpenWeatherMap API.
- **styled-components** – For component-level styling with support for theming.
- **react-switch** – For implementing the light/dark mode toggle.
- **react-geolocated** – To fetch the user's geolocation for weather data.

### 4. Get OpenWeather API Key

- Go to [OpenWeatherMap](https://home.openweathermap.org/api_keys) and create an account.
- Generate an API key to access weather data.

### 5. Configure API Key

- In `App.js`, replace the placeholder with your OpenWeather API key:

```javascript
const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

---

## Run the Application

```bash
npm start
```

- The app will start at `http://localhost:3000`.

---

## File Structure

```
src/
│
├── weather-app/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── ToggleButton.jsx
|   ├── GlobalStyle.jsx
│   ├── index.jsx
├── App.jsx
├── Main.jsx
```

## How to Use

1. Allow location access when prompted to get weather data for your current location.
2. Alternatively, use the search bar to enter the city name.
3. Toggle the switch to switch between light and dark mode.
4. View the 5-hour forecast below the current weather data.

---

## API Endpoints

- **Current Weather** – `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}`
- **5-Day Forecast** – `https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}`
- **Geolocation Weather** – `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}`

---

## Screenshots

- **Light Mode** – Displays weather data in a bright and clean interface.
- **Dark Mode** – Suitable for low-light conditions with a darker theme.

---

## License

This project is licensed under the MIT License. Feel free to modify and use it for your personal or professional projects.

---

## Contribution

Pull requests are welcome. For significant changes, please open an issue first to discuss what you would like to change.
