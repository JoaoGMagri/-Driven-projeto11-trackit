import Image from "../../Assets/Images/logo-TrackIt.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Soon, SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import axios from "axios";

export default function Registration() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    function finish() {
        const obj = {
            email: email,
            name: name,
            image: image,
            password: password
        }

        const promise = axios.post(URL, obj);
        promise.then((res) => {
            navigate("/");
        });
        promise.catch((err) => console.log(err.response.data));

    }

    function submit(event) {
        event.preventDefault();
        finish();
    }

    return (
        <Container>
            <Soon src={Image} alt="" />
            <SoonName>TrackIt</SoonName>

            <FormField onSubmit={submit}>

                <InputField
                    type="email"
                    placeholder="email"
                    onChange={(item) => setEmail(item.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="senha"
                    onChange={(item) => setPassword(item.target.value)}
                    required
                />
                <InputField
                    type="text"
                    placeholder="nome"
                    onChange={(item) => setName(item.target.value)}
                    required
                />
                <InputField
                    type="url"
                    placeholder="foto"
                    onChange={(item) => setImage(item.target.value)}
                    required
                />

                <ButtonField type="submit">Cadastrar</ButtonField>

            </FormField>

            <Link to="/">
                <SpanField>Já tem uma conta? Faça login!</SpanField>
            </Link>
        </Container>
    )

}