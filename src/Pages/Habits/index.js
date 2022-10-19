import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../Contexts/auth"
import styled from "styled-components";
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import BoxCreatingHabits from "./BoxCreatingHabits";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HabitsList from "./HabitsList";

export default function Habits() {
    
    const { token, update } = useContext(AuthContext);
    const navigate = useNavigate();

    const [staCreate, setStaCreate] = useState(false);
    const [arrayHabits, setArrayHabits] = useState([]);


    useEffect(() => {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config);
        promise.then((res) => {

            setArrayHabits(res.data);
            console.log("objeto Habits: ", res.data)

        });
        promise.catch((err) => {
            console.log(err.response.data);
            alert('Error: ' + err.response.data.message);

            navigate("/");
            
            window.location.reload();
        });

    }, [update])
    console.log("objeto Habits depois do useEffect: ", arrayHabits)


    return (
        <ContainerHabits>

            <Head />

            <CreatingHabits>
                <h1>Meus hábitos</h1>
                <h2 onClick={() => { setStaCreate(true) }}>+</h2>
            </CreatingHabits>

            <Box>
                <BoxCreatingHabits staCreate={staCreate} setStaCreate={setStaCreate} />
            </Box>

            {( arrayHabits.length === 0 ) ? (
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            ) : (
                arrayHabits.map( (item, i) => <HabitsList item={item} key={i} i={i}/>) 
            )
            }

            <Footer />

        </ContainerHabits>
    )

}
const ContainerHabits = styled.div`

    width: 100vw;
    height: 100vh;

    position: relative;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 95px;

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
const Box = styled.div`
    display: flex;
    justify-content: center;
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