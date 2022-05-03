import React, { useEffect, useState } from "react";
import CheckboxInput from "../../components/CheckboxInput";
import Logo from "../../components/Logo";
import RadioInput from "../../components/RadioInput";
import TextInput from "../../components/TextInput";
import { Background } from "./styles";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import DateInput from "../../components/DateInput";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [registerData, setRegisterData] = useState({});
  const [pConfirm, setPConfirm] = useState(false);
  const [eConfirm, setEConfirm] = useState(false);
  const [isError, setIsError] = useState([""]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(registerData);
    if (registerData.email !== registerData.emailConfirm) {
      return alert("Os e-mails devem ser iguais.");
    }
    if (registerData.password !== registerData.passwordConfirm) {
      return alert("As senhas devem ser iguais.");
    }
    await api
      .post("/user/", registerData)
      .then((res) => alert(`O usuário ${res.data.nickname} foi criado`))
      .then(navigate("/"))
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
                setData={setRegisterData}
                Data={registerData}
                placeholder="Seu e-mail aqui."
                title="Qual é o seu e-mail?"
                type="email"
                dataname={"email"}
                isError={isError}
                required={true}
              ></TextInput>
              <TextInput
                setData={setRegisterData}
                Data={registerData}
                placeholder="confirme seu e-mail."
                title="Repita seu e-mail aqui"
                type="email"
                dataname={"emailConfirm"}
                isError={isError}
                required={true}
              ></TextInput>
              <TextInput
                setData={setRegisterData}
                Data={registerData}
                placeholder="Sua senha aqui"
                title="Crie uma senha"
                type="password"
                dataname={"password"}
                isError={isError}
                required={true}
              ></TextInput>
              <TextInput
                setData={setRegisterData}
                rData={registerData}
                placeholder="Confirme sua senha aqui"
                title="Confirmar"
                type="password"
                dataname={"passwordConfirm"}
                isError={isError}
                required={true}
              ></TextInput>
              <TextInput
                setData={setRegisterData}
                Data={registerData}
                placeholder="Seu nome ou apelido aqui"
                title="Como devemos chamar você?"
                type="text"
                dataname={"nickname"}
              ></TextInput>
              <DateInput
                setData={setRegisterData}
                Data={registerData}
                title="Qual a sua data de nascimento?"
                dataname={"birth"}
              ></DateInput>
              <RadioInput
                setData={setRegisterData}
                rData={registerData}
                options={["Masculino", "Feminino", "Outro"]}
                title="Qual é o seu gênero?"
                dataname={"genre"}
              ></RadioInput>
              <CheckboxInput
                options={[
                  "Eu concordo com os Termos e Condições de Uso do Camarão.",
                ]}
              ></CheckboxInput>
              <input type="submit" value="Inscrever-se" />
            </form>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Signin;
