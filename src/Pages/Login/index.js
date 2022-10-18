import Image from "../../Assets/Images/logo-TrackIt.png";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Soon, SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import { AuthContext } from "../../Contexts/auth"
import axios from "axios";


export default function Login() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();

    const { setToken } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function finish() {
        const obj = {
            email: email,
            password: password
        }
        /* email: "jhnkhl@njkl.com"
        image: "https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-bran…719fce0c8b0d64bc7eef86fc504c323343c1bcb3d6ea14d65b83797ab745"
        name: "djksol"
        password: "1234" */

        console.log(obj);
        const promise = axios.post(URL, obj);
        promise.then((res) => {
            console.log(res.data);
            navigate("/habitos");
            setToken(res.data.token);
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

                <ButtonField type="submit">Entrar</ButtonField>
            
            </FormField>

            <Link to="/cadastro">
                <SpanField>Não tem uma conta? Cadastre-se!</SpanField>
            </Link>
        </Container>
    )

}

