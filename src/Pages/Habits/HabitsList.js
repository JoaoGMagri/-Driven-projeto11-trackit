import styled from "styled-components";
import Trash from "../../Assets/Images/lixeira.png"
import { useContext,} from "react"
import { AuthContext } from "../../Contexts/auth"
import axios from "axios";

export default function HabitsList({ item }) {

    const arrayWeek = ["D", "S", "T", "Q", "Q", "S", "S"]
    const weekSelectd = item.days;
    const { token, setUpdate } = useContext(AuthContext);

    function deleteHabits(){

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        if( window.confirm( 'Deseja mesmo apagar o hábito?' ) === true ){
            const promise = axios.delete(URL, config);
            promise.then((res) => { setUpdate([]) });
            promise.catch((err) => { alert('Error: ' + err.response.data.message) });
        }

    }

    return (
        <Box>

            <ContainerHabitsList>

                <Tittle>{item.name}</Tittle>

                <ContainerWeekDays>

                    {arrayWeek.map((item, i) => <WeekDays
                        colorLetter={ weekSelectd.includes(i) ? true : false }
                        backgroundColor={ weekSelectd.includes(i) ? true : false }
                        key={i}
                    >
                        {item}
                    </WeekDays>
                    )}

                </ContainerWeekDays>

                <ImageTrash src={Trash} alt="" onClick={deleteHabits}/>
            </ContainerHabitsList>
        </Box>

    )

}
const Box = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ContainerHabitsList = styled.div`

    width: 90%;
    height: 91px;
    margin-bottom: 15px;
    background-color: #FFF;
    border: 0px solid;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: relative;

`
const Tittle = styled.h1`

    margin-bottom: 10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;

`
const ContainerWeekDays = styled.div`

    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

`
const WeekDays = styled.div`

    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;

    background-color: ${props => props.backgroundColor ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.colorLetter ? "#FFFFFF" : "#DBDBDB"};

`
const ImageTrash = styled.img`
    position: absolute;
    top: 11px;
    right: 10px;
    
`