import styled from "styled-components";
import Head from "../Components/Head";
import Footer from "../Components/Footer";

export default function Historic(){

    return(
        <ContainerHistoric>
            <Head />

            <TitleHistoric>
                <h1>Historico</h1>    
            </TitleHistoric>
            
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            
            <Footer />
        </ContainerHistoric>
    )

}

const ContainerHistoric = styled.div`

    width: 100vw;
    height: 100vh;

    position: relative;
    background-color: #E5E5E5;
    margin: 70px 0px;
    box-sizing: border-box;

`
const TitleHistoric = styled.div`

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
    
`
const Text = styled.div`

    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #666666;
    word-break: break-word;

`