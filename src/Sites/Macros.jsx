import styled from 'styled-components'
import CircularProgression from './DashboardPage/CircularProgression';
import addImg from '../Images/plus-img.png'

const Background = styled.div`
    background-color: #f0f0f0;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    font-family: roboto-regular;
    padding: 25px;

    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        margin-bottom: 25px;
    }
`;

const SummaryContainer = styled.div`
    /* box-shadow: 0 5px 15px #686868; */
    background-color: white;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-bottom: auto;
`;
const SummaryHeadings = styled.h2`
    font-size: 18px;
    text-align: center;
    margin-top: 5px;
`;
const SummarySeparator = styled.div`
    flex-direction: column;
    margin: 10px 15px;
`;

const MealTrackContainer = styled.div`
    /* box-shadow: 0 5px 15px #686868; */
    background-color: white;
    border-radius: 7px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const MealTrackHeader = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

const DividerLine = styled.div`
    width: 80%;
    height: 0px;
    border: 1px solid grey;
    margin: 0 auto;
`;
const AddButton = styled.button`
    border: none;
    background-color: white;
    :hover {
        cursor: pointer;
    }
`;

const AddImage = styled.img`
    height: 25px;
    width: 25px;
`;

export default function Macros() {

    return(
        <Background>
            <h1>NUTRITIONAL DATA FOR TODAY</h1>
            <SummaryContainer>
                <SummarySeparator>
                    <CircularProgression percentage={50} colour="#ff0000" />
                    <SummaryHeadings>Calories</SummaryHeadings>
                </SummarySeparator>    
                <SummarySeparator>
                    <CircularProgression percentage={50} colour="#ff0000" />
                    <SummaryHeadings>Protein</SummaryHeadings>
                </SummarySeparator>
                <SummarySeparator>
                    <CircularProgression percentage={50} colour="#ff0000" />
                    <SummaryHeadings>Fats</SummaryHeadings>
                </SummarySeparator>
                <SummarySeparator>
                    <CircularProgression percentage={50} colour="#ff0000" />
                    <SummaryHeadings>Carbohydrates</SummaryHeadings>
                </SummarySeparator>
            </SummaryContainer>
            <MealTrackContainer>
                <MealTrackHeader>FOOD LOG</MealTrackHeader>
                <DividerLine />

                <AddButton><AddImage src={addImg} /></AddButton>

            </MealTrackContainer>
        </Background>
    )
}

const foodData = [{
    title: '',          
    mealType: '',
    calories: '',
    protein: '',
    fats: '',
    carbohydrates: '',
}];