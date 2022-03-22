import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Shrimp.svg";
import { Shrimp } from "./styles";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Shrimp onClick={() => navigate("/")}>
      <img src={logo} />
    </Shrimp>
  );
}
