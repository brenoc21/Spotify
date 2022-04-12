import React, { useEffect, useState } from "react";
import CheckboxInput from "../../components/CheckboxInput";
import Logo from "../../components/Logo";
import RadioInput from "../../components/RadioInput";
import TextInput from "../../components/TextInput";
import { Background } from "./styles";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
function Signin() {
  const [registerData, setRegisterData] = useState({});
  const [pConfirm, setPConfirm] = useState(false);
  const [eConfirm, setEConfirm] = useState(false);
  const [isError, setIsError] = useState([""]);
  useEffect(() => {
    registerData.passwordConfirm !== registerData.password
      ? setPConfirm(true)
      : setPConfirm(false);
  }, registerData.passwordConfirm);
  useEffect(() => {
    registerData.emailConfirm !== registerData.email
      ? setEConfirm(true)
      : setEConfirm(false);
  }, registerData.emailConfirm);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(registerData);
    if (registerData.email !== registerData.emailConfirm) {
      return alert("Os e-mails devem ser iguais");
    }
    if (registerData.password !== registerData.passwordConfirm) {
      return setIsError(["password", "passwordConfirm"]);
    }
  }
  return (
    <Background>
      <div id="Content-Container">
        <div class="main-container">
          <Logo className="logoSvg"></Logo>
          <h1 id="Title">Inscreva-se grátis e comece a curtir.</h1>
          <div id="Main-Content">
            <div id="Alternative-Login-Container">
              <button id="facebook-btn" class="smLogin">
                <BsFacebook></BsFacebook>
                Inscreva-se com o Facebook
              </button>
              <button id="google-btn" class="smLogin">
                <FcGoogle></FcGoogle>
                Inscrever-se com o Google
              </button>
            </div>
            <span class="division">
              <div class="line"></div> ou <div class="line"></div>
            </span>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                placeholder="Seu e-mail aqui."
                title="Qual é o seu e-mail?"
                type="email"
                dataname={"email"}
                isError={isError}
              ></TextInput>
              <TextInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                placeholder="confirme seu e-mail."
                title="Repita seu e-mail aqui"
                type="email"
                dataname={"emailConfirm"}
                isError={isError}
              ></TextInput>
              <TextInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                placeholder="Sua senha aqui"
                title="Crie uma senha"
                type="password"
                dataname={"password"}
                isError={isError}
              ></TextInput>
              <TextInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                placeholder="Confirme sua senha aqui"
                title="Confirmar"
                type="password"
                dataname={"passwordConfirm"}
                isError={isError}
              ></TextInput>
              <TextInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                placeholder="Seu nome ou apelido aqui"
                title="Como devemos chamar você?"
                type="text"
                dataname={"nickname"}
              ></TextInput>
              <RadioInput
                setRegisterData={setRegisterData}
                registerData={registerData}
                options={["Masculino", "Feminino", "Outro"]}
                title="Qual é o seu gênero?"
                dataname={"gender"}
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
