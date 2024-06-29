import react, { useState } from "react";
import styled from "styled-components"

const Page = styled.div`
    background-color: #ffffff;
`;

const Form = styled.form``;
const InputContainer = styled.span`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding: 5px 10%;
`;
const InputWrapper = styled.div`
    font-size: 18px;
    height: 28px;

    display: flex;
    align-items: center;
`;
const Label = styled.label`
    margin-right: 10px;
    width: 125px;
`;
const Input = styled.input`
    height: 24px;
    width: 250px;
`;

const ButtonWrapper = styled.div`
    height: 100%;
    width: 385px;
    display: flex;
    justify-content: space-between;
`;

const AutoCalorieButton = styled.button`
    width: 45%;
    height: 20px;
`;
const AddButton = styled.button`
    width: 45%;
    height: 20px;
`;

export default function AddMenu() {
    const [title, setTitle] = useState('');
    const [mealType, setMealType] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [fats, setFats] = useState('');
    const [carbohydrates, setCarbohydrates] = useState('');
    const [totalCalories, setTotalCalories] = useState('');

    const HandleCalorieCalculator = (e) => {
        e.preventDefault();
        const totalCalorie = ((protein * 4) + (fats * 9) + (carbohydrates * 4));
        setTotalCalories(totalCalorie);
        console.log(totalCalories);
    }

    const HandleSubmitButton = () => {
        
    }

    return( 
        <Page>
            <Form>
                <InputContainer>
                    <InputWrapper>
                        <Label>Title: </Label>
                        <Input value={title} placeholder="Enter title of meal"/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Meal Type: </Label>
                        <Input value={mealType} placeholder="Enter the type of meal. Eg. Breakfast etc."/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label >Calories: </Label>
                        <Input value={calories} placeholder="Press calculate to automatically enter"/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Protein: </Label>
                        <Input id="inpProtein" type="number" value={protein} onChange={(e) => setProtein(Number(e.target.value))}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Fats: </Label>
                        <Input id="inpFats" type="number" value={fats} onChange={(e) => setFats(Number(e.target.value))}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Carbohydrates: </Label>
                        <Input id="inpCarbohydrates" type="number" value={carbohydrates} onChange={(e) => setCarbohydrates(Number(e.target.value))}/>
                    </InputWrapper>

                    <ButtonWrapper>
                        <AutoCalorieButton onClick={HandleCalorieCalculator}>Calculate Calories</AutoCalorieButton>
                        <AddButton onClick={HandleSubmitButton}>Submit</AddButton>
                    </ButtonWrapper>

                </InputContainer>
            </Form>
        </Page>
    )
}