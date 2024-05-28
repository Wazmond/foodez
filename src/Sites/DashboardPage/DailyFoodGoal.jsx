import styled from 'styled-components'
import CircularProgression from './CircularProgression';

const DailyFoodGoalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 5px 15px #686868;
    border-radius: 10px;
    font-family: roboto-thin;
    width: 300px;
    padding: 25px;

    .container {
        display: flex;
        flex-direction: row;

        h2 {
            margin: auto;
            font-size: 25px;

        }
    }
`;

const CarbsContainer = styled.div``;
const ProteinContainer = styled.div``;
const FatsContainer = styled.div``;

export default function DailyFoodGoal() {
    return(
        <>
            <DailyFoodGoalContainer>
                <CarbsContainer className='container'>
                    <CircularProgression colour="#684848" percentage={60}/>
                    <h2>CARBS</h2>
                </CarbsContainer>

                <ProteinContainer className='container'>
                    <CircularProgression colour="#ff0000ff" percentage={25}/> 
                    <h2>PROTEIN</h2>
                </ProteinContainer>

                <FatsContainer className='container'>
                    <CircularProgression colour="#ff9d2e" percentage={50}/>
                    <h2>FATS</h2>
                </FatsContainer>
            </DailyFoodGoalContainer>
        </>
    )
}

