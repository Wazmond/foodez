import styled from "styled-components"
import { setGoal } from "../../API/Slices/MacroGoalSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const GoalMenuPage = styled.div`
    height: 650px;
    width: 650px;
    background-color: #b36464;
    position: absolute;
    z-index: 10;
`;

const Title = styled.h2``;

const Category = styled.h4`
    
    .calories {
        
    }
    .proteins {

    }
    .fats {

    }
    .carbs {

    }
`;
const CategoryInput = styled.input``;

const SetGoalButton = styled.button``;
export default function SetGoalMenu({setGoalState}) {
    const [calories, setCalories] = useState();
    const [proteins, setProteins] = useState();
    const [fats, setFats] = useState();
    const [carbs, setCarbs] = useState();
    const dispatch = useDispatch();


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
        <GoalMenuPage>
            <Title>Goal Setting</Title>
            <Category className="calories" >Calories:             <CategoryInput value={calories} onChange={(e) => setCalories(e.target.value)}/></Category>
            <Category className="proteins" >Proteins:             <CategoryInput value={proteins} onChange={(e) => setProteins(e.target.value)}/></Category>
            <Category className="fats"     >Fats:                 <CategoryInput value={fats} onChange={(e) => setFats(e.target.value)}/></Category>
            <Category className="carbs"    >Carbohydrates:        <CategoryInput value={carbs} onChange={(e) => setCarbs(e.target.value)}/></Category>

            <SetGoalButton onClick={handleSetGoal}>Set Goal</SetGoalButton>
        </GoalMenuPage>
    )
}