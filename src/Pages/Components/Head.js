import styled from "styled-components";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth"

export default function Head(){

    const { imageUser } = useContext(AuthContext);

    return(

        <ContainerHead>
            <TextSoon>TrackIt</TextSoon>
            <ImageUsers src={imageUser} alt="" />
        </ContainerHead>

    )

}

const ContainerHead = styled.div`

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 18px;

    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;

`
const TextSoon = styled.h1`

    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;

`
const ImageUsers = styled.img`

    width: 51px;
    height: 51px;
    border-radius: 100px;

`