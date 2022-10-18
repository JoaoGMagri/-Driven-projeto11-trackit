import { useContext } from "react"
import { AuthContext } from "../../Contexts/auth"
import styled from "styled-components";
import Head from "../Components/Head";
import Footer from "../Components/Footer";

export default function Habits() {
    const { token } = useContext(AuthContext);

    console.log(token);
    return (
        <ContainerHabits>

            <Head />

            <CreatingHabits>
                <h1>Meus hábitos</h1>
                <h2>+</h2>
            </CreatingHabits>

            <Footer />

        </ContainerHabits>
    )

}

const ContainerHabits = styled.div`

    width: 100vw;
    height: 100vh;

    position: relative;
    background-color: #E5E5E5;
    margin: 70px 0px;

`
const CreatingHabits = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    h2{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        text-align: center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;

        color: #FFFFFF;
    }

`