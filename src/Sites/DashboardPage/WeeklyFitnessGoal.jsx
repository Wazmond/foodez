import styled from "styled-components"
import CircularProgression from "./CircularProgression"

const WeeklyFitnessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 5px 15px #686868;
    border-radius: 10px;
    font-family: roboto-thin;
    width: 300px;
    padding: 25px;
`;

export default function WeeklyFitnessGoal() {
    return(
        <WeeklyFitnessContainer>
            <CircularProgression colour="#00a2ff" percentage={90}/>
            <h2>WEEKLY FITNESS GOAL</h2>
        </WeeklyFitnessContainer>
    );
}