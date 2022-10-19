import styled from "styled-components";
import Head from "../Components/Head";
import Footer from "../Components/Footer";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Today() {

    let day = dayjs('2022-10-20').locale('pt-br').format("dddd, DD/MM");
    day = day[0].toUpperCase() + day.substring(1).replace('-feira', '');

    return (
        <ContainerToday>

            <Head />

            <TitleToday>
                <h1>{day}</h1>
                <h2>67% dos hábitos concluídos</h2>
            </TitleToday>

            

            <Footer />
        </ContainerToday>
    )

}
const ContainerToday = styled.div`

    width: 100vw;
    height: 100vh;

    position: relative;
    background-color: #E5E5E5;
    margin: 70px 0px;

`
const TitleToday = styled.div`

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