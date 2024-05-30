import styled from "styled-components"
import CircularProgression from "./CircularProgression";

const DailyFitnessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 5px 15px #686868;
    border-radius: 10px;
    font-family: roboto-thin;
    width: 300px;
    padding: 25px;
`;


export default function DailyFitnessGoal() {
    return(
        <DailyFitnessContainer>
            <CircularProgression colour="#0099ff" percentage={50} />
            <h2>DAILY FITNESS GOAL</h2>
            {/* add a plus sign so you can add fitness/activities */}
        </DailyFitnessContainer>
    )
}