import styled from "styled-components"
import { setGoal } from "../../API/Slices/MacroGoalSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";


const Background = styled.div`
    width: calc(100vw - (225px + 80px));
    height: calc(100vh - 80px);
    position: absolute;
    z-index: 15;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000053;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px #ffffff;

`;
const GoalMenuPage = styled.div`
    padding: 25px;
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 20;
    display: flex;
    flex-direction: column;

`;

const Title = styled.h2`
    margin-bottom: 25px;
    text-align: center;
`;

const CatSpans = styled.span`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;
const Category = styled.h4`
    margin: 0 auto 0 0; 
    /* .calories {
        
    }
    .proteins {

    }
    .fats {

    }
    .carbs {

    } */
`;
const CategoryInput = styled.input`
    margin-left: 20px;
`;

const SetGoalButton = styled.button`
    margin-top: 15px;
`;


export default function SetGoalMenu({ setGoalState }) {
    const [calories, setCalories] = useState('');
    const [proteins, setProteins] = useState('');
    const [fats, setFats] = useState('');
    const [carbs, setCarbs] = useState('');
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        const handleExitMenu = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            setGoalState(false);
          }
        };
    
        document.addEventListener('mousedown', handleExitMenu);
        return () => {
          document.removeEventListener('mousedown', handleExitMenu);
        };
      }, [setGoalState]);

    function handleSetGoal(e) {
        e.preventDefault();
        const payload = {
            calories,
            proteins,
            fats,
            carbs
        };
        payload && dispatch(setGoal(payload));
        setGoalState(false);
    }
    return( 
        <Background >
            <GoalMenuPage ref={ref}>
                <Title>Goal Setting</Title>
                <CatSpans>
                    <Category className="calories" >Calories:</Category>             <CategoryInput value={calories} onChange={(e) => setCalories(e.target.value)}/>
                </CatSpans>
                <CatSpans>
                    <Category className="proteins" >Proteins:</Category>             <CategoryInput value={proteins} onChange={(e) => setProteins(e.target.value)}/>
                </CatSpans>
                <CatSpans>
                    <Category className="fats"     >Fats:</Category>                 <CategoryInput value={fats} onChange={(e) => setFats(e.target.value)}/>
                </CatSpans>
                <CatSpans>
                    <Category className="carbs"    >Carbohydrates:</Category>        <CategoryInput value={carbs} onChange={(e) => setCarbs(e.target.value)}/>
                </CatSpans>

                <SetGoalButton onClick={handleSetGoal}>Set Goal</SetGoalButton>
            </GoalMenuPage>
        </Background>
    )
}