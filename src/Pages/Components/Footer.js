import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function Footer() {

    return (

        <ContainerFooter>

            <Text>Hábitos</Text>

            <CircularProgressbarWithChildren
                value={50}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#FFF",
                    pathColor: "#FFF",
                    trailColor: "transparent",
                    strokeLinecap: "round"
                })}
            >

                <TextProgress>Hoje</TextProgress>
            
            </CircularProgressbarWithChildren>
            

            <Text>Histórico</Text>

        </ContainerFooter>

    )

}

const ContainerFooter = styled.div`

    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 18px;

    position: fixed;
    bottom: 0;
    left: 0;

    svg{
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
    }

`
const TextProgress = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFF;
    margin-bottom: 115px;

`
const Text = styled.span`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;

`