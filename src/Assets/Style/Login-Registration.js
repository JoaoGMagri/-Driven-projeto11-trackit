import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FFF;

`;

export const Soon = styled.img`
    
    width: 256px;
    margin-top: 68px;
    margin-bottom: 15px;

`

export const SoonName = styled.h1`
    
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    color: #126BA5;

`;

export const FormField = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const InputField = styled.input`
    
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 15px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    ::placeholder{
        color: #DBDBDB;
    }

`;

export const ButtonField = styled.button`
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: 0px solid;
    border-radius: 5px;
    margin-bottom: 25px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #FFFFFF;

`;

export const SpanField = styled.span`
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-decoration-line: underline;
    color: #52B6FF;

`;