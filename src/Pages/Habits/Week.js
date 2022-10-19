import styled from "styled-components";

export default function Week({ selectedWeek, fun }) {

    const arrayWeek = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <ContainerWeek>
            {arrayWeek.map((item, i) =>
                <WeekDays
                    colorLetter={selectedWeek.includes(i) ? true : false}
                    backgroundColor={selectedWeek.includes(i) ? true : false}
                    onClick={() => fun(i)}
                    key={i}
                >
                    {item}
                </WeekDays>
            )}

        </ContainerWeek>

    )

}
const ContainerWeek = styled.div`

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
    margin-bottom: 29px;

    background-color: ${props => props.backgroundColor ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.colorLetter ? "#FFFFFF" : "#DBDBDB"};

`