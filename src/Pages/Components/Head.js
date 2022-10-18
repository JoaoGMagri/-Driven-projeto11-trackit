import styled from "styled-components";

export default function Head(){

    return(

        <ContainerHead>
            <TextSoon>TrackIt</TextSoon>
            <ImageUser src="https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=740&t=st=1666106012~exp=1666106612~hmac=1199719fce0c8b0d64bc7eef86fc504c323343c1bcb3d6ea14d65b83797ab745" alt="" />
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
const ImageUser = styled.img`

    width: 51px;
    height: 51px;
    border-radius: 100px;

`