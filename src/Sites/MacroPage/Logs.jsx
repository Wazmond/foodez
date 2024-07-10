import { useSelector } from "react-redux";
import styled from "styled-components";

const LogsPage = styled.div``;

export default function Logs() {
    const loggedItems = useSelector(state => state.persistedReducer.macrolog)
    return(
        <LogsPage>

        </LogsPage>
    )
}