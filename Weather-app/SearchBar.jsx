import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 12px;
  width: 300px;
  border: none;
  border-radius: 20px;
  outline: none;
`;

const Button = styled.button`
  background: #0984e3;
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">
        <FaSearch />
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;
