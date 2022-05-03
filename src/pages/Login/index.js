import React, { useEffect, useState } from "react";
import CheckboxInput from "../../components/CheckboxInput";
import RadioInput from "../../components/RadioInput";
import TextInput from "../../components/TextInput";
import { Background } from "./styles";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import DateInput from "../../components/DateInput";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
function Login() {
  const {userId, setUserId, nick, setNick, token, setToken} = useUser()
  const [authData, setAuthData] = useState({});
  const [pConfirm, setPConfirm] = useState(false);
  const [eConfirm, setEConfirm] = useState(false);
  const [isError, setIsError] = useState([""]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(authData);
  }, [authData]);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(authData);
    await api
      .post("/user/auth", authData)
      .then((res) => {
        console.log(res.data.user._id)
          setUserId(res.data.user._id)
          setNick(res.data.user.nickname)
          setToken(`Bearer ${res.data.jwt}`)
          localStorage.setItem("token", `Bearer ${res.data.jwt}`)
          localStorage.setItem("id", res.data.user._id)
          localStorage.setItem("nickname", res.data.user.nickname)
        return(
          navigate("/playlist")
      )})
      .catch((error) => alert(error));
  }
  return (
    <Background>
      <div id="Content-Container">
        <div class="main-container">
          <img src="../assets/Shrimp.svg"></img>
          <h1>Inscreva-se grátis e comece a curtir.</h1>
          <div id="Main-Content">
            <div id="Alternative-Login-Container">
              <button id="facebook-btn" class="smLogin">
                <BsFacebook className="svg"></BsFacebook>
                Inscreva-se com o Facebook
              </button>
              <button id="google-btn" class="smLogin">
                <FcGoogle className="svg"></FcGoogle>
                Inscrever-se com o Google
              </button>
            </div>
            <span class="division">
              <div class="line"></div> ou <div class="line"></div>
            </span>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInput
                setData={setAuthData}
                Data={authData}
                placeholder="Seu e-mail aqui."
                title="Qual é o seu e-mail?"
                type="email"
                dataname={"email"}
                isError={isError}
              ></TextInput>
              <TextInput
                setData={setAuthData}
                Data={authData}
                placeholder="Sua senha aqui"
                title="Crie uma senha"
                type="password"
                dataname={"password"}
                isError={isError}
              ></TextInput>
              <input type="submit" value="Inscrever-se" />
            </form>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Login;
