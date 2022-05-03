import React, { useState, useRef, useEffect } from "react";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import api from "../../services/api";

import { Background, Modal } from './styles';
import { useUser } from "../../context/userContext";

function EditProfileModal(props) {
    const { token } = useUser()
    const { onModalChange } = props
    const [registerData, setRegisterData] = useState({});
    const [isError, _] = useState([""]);
    let ref = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onModalChange(false);
                console.log(event.target);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();
        if (registerData.email !== registerData.emailConfirm) {
            return alert("Os e-mails devem ser iguais.");
        }
        console.log(registerData)
        console.log(registerData.password, registerData.passwordConfirm)
        if (registerData.password !== registerData.passwordConfirm) {
            return alert("As senhas devem ser iguais.");
        }
        api
        .put("/user/", registerData, {headers: { authorization: `${token}` }})
        .then(_ => alert(`Editado com sucesso`))
        .then(_ => onModalChange(false))
        .catch((error) => alert(error));
    }
    return (
        <Background>
            <Modal ref={ref} >
                <form onSubmit={(e) => handleSubmit(e)}>
                    <b id="Title">Edite seu perfil</b>
                    <TextInput
                        setData={setRegisterData}
                        Data={registerData}
                        placeholder="Seu e-mail aqui."
                        title="Qual é o seu novo e-mail?"
                        type="email"
                        dataname={"email"}
                        isError={isError}
                    ></TextInput>
                    <TextInput
                        setData={setRegisterData}
                        Data={registerData}
                        placeholder="Confirme seu novo e-mail."
                        title="Repita seu e-mail aqui"
                        type="email"
                        dataname={"emailConfirm"}
                        isError={isError}
                    ></TextInput>
                    <TextInput
                        setData={setRegisterData}
                        Data={registerData}
                        placeholder="Sua nova senha aqui"
                        title="Crie uma senha"
                        type="password"
                        dataname={"password"}
                        isError={isError}
                    ></TextInput>
                    <TextInput
                        setData={setRegisterData}
                        Data={registerData}
                        placeholder="Confirme sua nova senha aqui"
                        title="Confirmar"
                        type="password"
                        dataname={"passwordConfirm"}
                        isError={isError}
                    ></TextInput>
                    <TextInput
                        setData={setRegisterData}
                        Data={registerData}
                        placeholder="Seu novo nome ou apelido aqui"
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
                    <input type="submit" value="Confirmar Edições" />
                </form>
            </Modal>
        </Background>
    )
}

export default EditProfileModal;