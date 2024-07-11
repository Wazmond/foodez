import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { rmLog } from "../../API/Slices/MacroLogSlice";

const LogsPage = styled.div``;
const LogsSpan = styled.span`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    &:hover {
        background-color: lightgrey;
        border-radius: 5px;
    }
`;
const LogsResult = styled.p``;
const ClearItem = styled.button`
    height: 35px;
    width: 50px;
    margin: 0 15px 0 auto;
`;

export default function Logs() {
    const dispatch = useDispatch();

    console.log("Logs should be open");

    function handleRmItem(logs) {
        console.log("removing item: " + logs.title);
        dispatch(rmLog(logs));
    }

    const loggedItems = useSelector(state => state.persistedReducer.macroLog.logs);
    const logsList = Array.isArray(loggedItems) && loggedItems.map((logs, index) => {
        return (
            <LogsSpan key={index}>
                <LogsResult >{logs.title}</LogsResult>
                <ClearItem onClick={() => handleRmItem(logs)}>X</ClearItem>
            </LogsSpan>
        )
    })

    return(
        <LogsPage>
            {logsList}
        </LogsPage>
    )
}
