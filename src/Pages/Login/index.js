import Image from "../../Assets/Images/logo-TrackIt.png";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Soon, SoonName, Container, FormField, InputField, ButtonField, SpanField } from "../../Assets/Style/Login-Registration"
import { AuthContext } from "../../Contexts/auth"
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();

    const { setToken, setImageUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [block, setBlock] = useState(false);


    function finish() {

        setBlock(true);
        const obj = {
            email: email,
            password: password
        }

        const promise = axios.post(URL, obj);
        promise.then((res) => {
            setToken(res.data.token);
            setImageUser(res.data.image);

            navigate("/hoje");
        });

        promise.catch((err) => {
            setBlock(false);
            console.log(err.response.data.message);
        });

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
                    disabled={block}
                    required
                />
                <InputField
                    type="password"
                    placeholder="senha"
                    onChange={(item) => setPassword(item.target.value)}
                    disabled={block}
                    required
                />

                <ButtonField type="submit" disabled={block}>
                    {!block ? "Entrar" : <ThreeDots color="#FFF"/>}
                </ButtonField>

            </FormField>

            <Link to="/cadastro">
                <SpanField>Não tem uma conta? Cadastre-se!</SpanField>
            </Link>
        </Container>
    )

}