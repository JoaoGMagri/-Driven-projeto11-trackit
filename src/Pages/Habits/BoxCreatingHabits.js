import styled from "styled-components";
import Week from "./Week"
import { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/auth"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function BoxCreatingHabits({ staCreate, setStaCreate }) {

    const { token, setUpdate } = useContext(AuthContext);

    const [selectedWeek, setSelectedWeek] = useState([]);
    const [habitName, setHabitName] = useState("");
    const [block, setBlock] = useState(false);

    function selected(num) {

        if (selectedWeek.includes(num)) {
            let newArray = selectedWeek.filter((item) => item !== num);
            setSelectedWeek([...newArray]);
        } else {
            setSelectedWeek([...selectedWeek, num]);
        }

    }

    function save() {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const obj = {
            name: habitName,
            days: selectedWeek
        }
        setBlock(true);

        if (obj.days.length > 0 && obj.name !== "") {

            

            const promise = axios.post(URL, obj, config);

            promise.then((res) => {
                setBlock(false);
                setStaCreate(false);
                setSelectedWeek([]);
                setHabitName("");
                setUpdate([]); 
            });
            promise.catch((err) => {alert(err.response.data); setBlock(false);});
        } else if (obj.days.length > 0) {
            alert("Dê um nome para o seu hábito!");
            setBlock(false);
        } else if (obj.name !== "") {
            alert("Selecione um dia da semana!");
            setBlock(false);
        } else {
            alert("Preencha os campos disponiveis!");
            setBlock(false);
        }

    }

    return (

        <Container showHide={staCreate}>

            <InputField
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                onChange={(item) => setHabitName(item.target.value)}
                disabled={block}
            />

            <Week
                selectedWeek={selectedWeek}
                fun={selected}
            />

            <ContainerConfirm>

                <Confirm color="#FFF" letterColor="#52B6FF" onClick={() => setStaCreate(false)}> Cancelar </Confirm>
                <Confirm color="#52B6FF" letterColor="#FFF" onClick={save}>
                    {!block ? "Salvar" : <ThreeDots color="#FFF" />}
                </Confirm>

            </ContainerConfirm>

        </Container>

    );

}

const Container = styled.div`

    width: 340px;
    height: 180px;
    background-color: #FFF;
    border: 0px solid;
    border-radius: 5px;

    display: ${props => props.showHide ? "flex" : "none"};
    flex-direction: column;
    align-items: center;

`
const InputField = styled.input`

    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 15px 0px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    ::placeholder{
        color: #DBDBDB;
    }

`
const ContainerConfirm = styled.div`

    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`
const Confirm = styled.div`

    margin-left: 23px;
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.color};
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.letterColor};

`