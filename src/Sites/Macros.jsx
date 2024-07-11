import styled from 'styled-components'
import CircularProgression from './DashboardPage/CircularProgression';
import addImg from '../Images/plus-img.png'
import { addLog } from '../API/Slices/MacroLogSlice';
import { useEffect, useState } from 'react';
import AddMenu from './MacroPage/AddMenu.jsx';
import { useSelector } from 'react-redux';
import Logs from './MacroPage/Logs.jsx';



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

    margin-bottom: 25px;
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
    height: 100%;
    border-radius: 7px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const TitleButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    position: relative;

    height: 30px;
    width: 100%;
`;

const MealTrackHeader = styled.h2`
    font-size: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const AddButton = styled.button`
    margin-left: auto;
    border: none;
    background-color: white;
    :hover {
        cursor: pointer;
    }
`;

const AddImage = styled.img`
    height: 100%;
`;

const DividerLine = styled.div`
    width: 80%;
    height: 0px;
    border: 1px solid grey;
    margin: 0 auto 15px;
`;

const LogEntryContainer = styled.div`
    display: flex; 
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const AltContainer = styled.div`
    display: flex; 
    flex-direction: row;
    height: 25px;
    align-self: center;
`;

const AltText = styled.p`
    color: #929292;
    font-size: 18px;
`;

export default function Macros() {
    const [addMenuState, setAddMenuState] = useState(false);
    const loggedItems = useSelector(state => state.persistedReducer.macroLog.logs);
    const logsList = Array.isArray(loggedItems);

    function handleAddButton() {
        console.log('Handling addbutton press');
        setAddMenuState(!addMenuState);
        console.log(addMenuState);
    };

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
                <TitleButtonContainer>
                    <MealTrackHeader>FOOD LOG</MealTrackHeader>
                    <AddButton onClick={handleAddButton}><AddImage src={addImg} /></AddButton>
                </TitleButtonContainer>
                <DividerLine />
                <LogEntryContainer>
                    {addMenuState ? 
                        <AddMenu setAddMenuState={setAddMenuState}/> 
                        :
                        (logsList ?
                            <Logs /> :
                            <AltContainer>
                                <AltText>No nutritional entries for today yet...</AltText>
                            </AltContainer>
                        )
                    }
                </LogEntryContainer>
            </MealTrackContainer>
        </Background>
    )
}
