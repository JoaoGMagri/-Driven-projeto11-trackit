import styled from "styled-components";
import CheckImage from "../../Assets/Images/check.png";
import { useContext } from "react"
import { AuthContext } from "../../Contexts/auth"
import axios from "axios";

export default function CardHabitsDay({ item }) {
    
    const id = item.id
    const { token, setUpdateCheck } = useContext(AuthContext);

    function selected(item) {

        const obj = {}
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        if (item) {
            
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

            const promise = axios.post(URL, obj, config);
            promise.then( () => setUpdateCheck([]) );
            promise.catch((err) => {
                alert('Error: ' + err.response.data.message);
            });

        } else {
     
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

            const promise = axios.post(URL, obj, config);
            promise.then( () => setUpdateCheck([]) );
            promise.catch((err) => {
                alert('Error: ' + err.response.data.message);
            });

        }

    }

    return (

        <Box>

            <ContainerCards>

                <Text>
                    <h1>{item.name}</h1>

                    <h2> Sequência atual: {item.currentSequence}</h2>
                    <h2> Seu recorde: {item.highestSequence}</h2>

                </Text>

                <Check colorCheck={item.done} onClick={() => selected(item.done)}>
                    <img src={CheckImage} alt="" />
                </Check>

            </ContainerCards>

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
const ContainerCards = styled.div`
    
    width: 90%;
    height: 91px;
    margin-bottom: 15px;
    background-color: #FFF;
    border: 0px solid;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;


`
const Text = styled.div`
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: #666666;
    }
`
const Check = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.colorCheck ? "#8FC549" : "#EBEBEB"};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`