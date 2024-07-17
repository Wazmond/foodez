import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { rmLog } from "../../API/Slices/MacroLogSlice";

const LogsPage = styled.div`
    margin-top: 25px;
`;
const Header = styled.div`
    width: 100%;
    padding-right: 80px;
    display: inline-grid;
    grid-template-columns: 40% 15% 15% 15% 15%;
    grid-template-rows: 25px;
    border-bottom: 1px solid black;
`;

const Headings = styled.h4`
    margin: auto;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LogsContainer = styled.div``;
const LogsSpan = styled.span`
    padding-right:80px;
    width: 100%;
    height: 40px;
    display: grid;
    align-items: center;
    grid-template-columns: 40% 15% 15% 15% 15% 80px;
    &:hover {
        background-color: lightgrey;
        border-radius: 5px;
    }
    .numbers {
        display: flex;
        justify-content: center;
    }
`;
const LogsResult = styled.p`
    margin-left: 15px;
`;
const Calories = styled.p``;
const Proteins = styled.p``;
const Fats = styled.p``;
const Carbs = styled.p``;

const ClearItem = styled.button`
    height: 35px;
    width: 50px;
    margin: auto 15px auto auto;
`;
export default function Logs() {
    const dispatch = useDispatch();

    console.log("Logs should be open");

    function handleRmItem(logs) {
        console.log("removing item: " + logs.id);
        dispatch(rmLog(logs));
    }

    const loggedItems = useSelector(state => state.persistedReducer.macroLog.logs);
    const logsList = Array.isArray(loggedItems) && loggedItems.map((logs, index) => {
        return (
            <LogsSpan key={index}>
                <LogsResult >{logs.title}</LogsResult>
                <Calories className="numbers">{logs.calories}</Calories>
                <Proteins className="numbers">{logs.protein}</Proteins>
                <Fats className="numbers">{logs.fats}</Fats>
                <Carbs className="numbers">{logs.carbohydrates}</Carbs>
                <ClearItem onClick={() => handleRmItem(logs)}>X</ClearItem>
            </LogsSpan>
        )
    })

    return(
        <LogsPage>
            <Header>
                <Headings>Name</Headings>
                <Headings>Calories</Headings>
                <Headings>Protein</Headings>
                <Headings>Fats</Headings>
                <Headings>Carbohydrates</Headings>
            </Header>
            <LogsContainer>
                {logsList}
            </LogsContainer>
        </LogsPage>
    )
}
