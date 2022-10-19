import styled from "styled-components";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import CardHabitsDay from "./CardHabitsDay";

import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../Contexts/auth"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Today() {

    let day = dayjs().locale('pt-br').format("dddd, DD/MM");
    day = day[0].toUpperCase() + day.substring(1).replace('-feira', '');

    const { token, updateCheck, percentage, percentageCalc, update } = useContext(AuthContext);
    const navigate = useNavigate();

    const [habitsList, setHabitsList] = useState([]);

    useEffect(() => {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config);
        
        promise.then((res) => {
            setHabitsList(res.data);
            percentageCalc(res.data);
        });
        promise.catch((err) => {
            alert('Error: ' + err.response.data.message);
            navigate("/");
            window.location.reload();
        });

    }, [navigate, token, updateCheck, update]);


    return (
        <ContainerToday>

            <Head />

            <TitleToday>
                <h1>{day}</h1>
                <h2>{percentage}% dos hábitos concluídos</h2>
            </TitleToday>

            {habitsList.map( (item) => <CardHabitsDay item={item} key={item.id} />)}

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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 18px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        color: #8FC549;
    }

`