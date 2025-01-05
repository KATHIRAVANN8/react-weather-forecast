import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

const CityName = styled.h2`
  margin: 10px 0;
`;

const Temp = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
  font-size: 20px;
`;

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ForecastItem = styled.div`
  text-align: center;
`;

const WeatherCard = ({ data, forecast }) => {
  return (
    <Card>
      <CityName>{data.name}</CityName>
      <Temp>{Math.round(data.main.temp)}°C</Temp>
      <Description>{data.weather[0].description}</Description>

      <ForecastContainer>
        {forecast &&
          forecast.list.slice(0, 5).map((item, index) => (
            <ForecastItem key={index}>
              <p>{new Date(item.dt * 1000).toLocaleTimeString()}</p>
              <p>{Math.round(item.main.temp)}°C</p>
            </ForecastItem>
          ))}
      </ForecastContainer>
    </Card>
  );
};

export default WeatherCard;
