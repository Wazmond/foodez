// import react, { useState } from "react";
// import { addLog } from "../../API/Slices/MacroLogSlice";
// import styled from "styled-components"

// const Page = styled.div`
//     background-color: #ffffff;
// `;

// const Form = styled.form``;
// const InputContainer = styled.span`
//     display: flex;
//     flex-direction: column;
//     gap: 25px;
//     align-items: center;
//     padding: 5px 10%;
// `;
// const InputWrapper = styled.div`
//     font-size: 18px;
//     height: 28px;

//     display: flex;
//     align-items: center;
// `;
// const Label = styled.label`
//     margin-right: 10px;
//     width: 125px;
// `;
// const Input = styled.input`
//     height: 24px;
//     width: 250px;
// `;

// const ButtonWrapper = styled.div`
//     height: 100%;
//     width: 385px;
//     display: flex;
//     justify-content: space-between;
// `;

// const AutoCalorieButton = styled.button`
//     width: 45%;
//     height: 20px;
// `;
// const AddButton = styled.button`
//     width: 45%;
//     height: 20px;
// `;

// const MissingFieldsContainer = styled.div`
//     background-color: #ffcdcd;
//     border: 1px solid red;
//     padding: 10px;
// `;
// const MissingMessage = styled.h2`
//     font-size: 17px;
//     text-align: center;
// `;
// const List = styled.ul`
//     display: flex;
//     flex-flow: wrap;
//     list-style: none;
// `;
// const ListContent = styled.li`
//     font-style: italic;
//     flex: 0 0 33.3333%;
//     text-align: center;
// `;

// export default function AddMenu() {
//     const [title, setTitle] = useState('');
//     const [mealType, setMealType] = useState('');
//     const [calories, setCalories] = useState('');
//     const [protein, setProtein] = useState('');
//     const [fats, setFats] = useState('');
//     const [carbohydrates, setCarbohydrates] = useState('');
//     // const [totalCalories, setTotalCalories] = useState('');
//     const [missingStatus, setMissingStatus] = useState(false);
//     const [submitCount, setSubmitCount] = useState('0');
//     // const payload = [title, mealType, calories, protein, fats, carbohydrates];

//     const HandleCalorieCalculator = (e) => {
//         e.preventDefault();
//         const totalCalories = ((protein * 4) + (fats * 9) + (carbohydrates * 4));
//         setCalories(totalCalories);
//         console.log(calories);
//         // console.log(calories);
//     }

//     const SubmissionCheck = ({ title, mealType, calories, protein, fats, carbohydrates }) => {  
//         return(        
//             <MissingFieldsContainer>
//                 <MissingMessage>The following is missing a value. Press Submit again or enter the missing fields.</MissingMessage>
//                 <List>
//                         {!title && <ListContent>Title</ListContent>}
//                         {!mealType && <ListContent>Meal Type</ListContent>}
//                         {!calories && <ListContent>Calories</ListContent>}
//                         {!protein && <ListContent>Protein</ListContent>}
//                         {!fats && <ListContent>Fats</ListContent>}
//                         {!carbohydrates && <ListContent>Carbohydrates</ListContent>}
//                 </List>
//             </MissingFieldsContainer>
//         )
//     }

//     const HandleSubmitButton = (e) => {
//         console.log("HandlingSubmitButton");
//         e.preventDefault();
//         submitCount < 1 ? setSubmitCount(submitCount + 1) : (
//             addLog({title, mealType, calories, protein, fats, carbohydrates}), 
//             console.log("adding log to persist")
//         );
//         setMissingStatus(true);
//     }

//     return( 
//         <Page>
//             <Form>
//                 <InputContainer>
//                     {missingStatus && (<SubmissionCheck title={title} mealType={mealType} calories={calories} protein={protein} fats={fats} carbohydrates={carbohydrates} />)}
//                     <InputWrapper>
//                         <Label>Title: </Label>
//                         <Input type="text" id="title" value={title} placeholder="Enter title of meal" onChange={(e) => setTitle(e.target.value)}/>
//                     </InputWrapper>
//                     <InputWrapper>
//                         <Label>Meal Type: </Label>
//                         <Input type="text" id="mealType" value={mealType} placeholder="Enter the type of meal. Eg. Breakfast etc." onChange={(e) => setMealType(e.target.value)}/>
//                     </InputWrapper>
//                     <InputWrapper>
//                         <Label>Protein: </Label>
//                         <Input id="inpProtein" type="number" value={protein} onChange={(e) => setProtein(Number(e.target.value))}></Input>
//                     </InputWrapper>
//                     <InputWrapper>
//                         <Label>Fats: </Label>
//                         <Input id="inpFats" type="number" value={fats} onChange={(e) => setFats(Number(e.target.value))}/>
//                     </InputWrapper>
//                     <InputWrapper>
//                         <Label>Carbohydrates: </Label>
//                         <Input id="inpCarbohydrates" type="number" value={carbohydrates} onChange={(e) => setCarbohydrates(Number(e.target.value))}/>
//                     </InputWrapper>
//                     <InputWrapper>
//                         <Label >Calories: </Label>
//                         <Input type="number" id="calories" value={calories} placeholder="Press calculate to automatically enter" onChange={(e) => setCalories(e.target.value)}/>
//                     </InputWrapper>
//                     <ButtonWrapper>
//                         <AutoCalorieButton onClick={HandleCalorieCalculator}>Calculate Calories</AutoCalorieButton>
//                         <AddButton onClick={HandleSubmitButton}>Submit</AddButton>
//                     </ButtonWrapper>

//                 </InputContainer>
//             </Form>
//         </Page>
//     )
// }

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLog } from "../../API/Slices/MacroLogSlice";
import styled from "styled-components";

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

const MissingFieldsContainer = styled.div`
    background-color: #ffcdcd;
    border: 1px solid red;
    padding: 10px;
`;
const MissingMessage = styled.h2`
    font-size: 17px;
    text-align: center;
`;
const List = styled.ul`
    display: flex;
    flex-flow: wrap;
    list-style: none;
`;
const ListContent = styled.li`
    font-style: italic;
    flex: 0 0 33.3333%;
    text-align: center;
`;

export default function AddMenu() {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [mealType, setMealType] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [fats, setFats] = useState('');
    const [carbohydrates, setCarbohydrates] = useState('');
    const [missingStatus, setMissingStatus] = useState(false);
    const [submitCount, setSubmitCount] = useState(0);
    const [payload, setPayload] = useState([]);


    const handleCalorieCalculator = (e) => {
        e.preventDefault();
        const totalCalories = ((protein * 4) + (fats * 9) + (carbohydrates * 4));
        setCalories(totalCalories);
        console.log(totalCalories);  // Log the new value directly
    };

    const SubmissionCheck = ({ title, mealType, calories, protein, fats, carbohydrates }) => {  
        return(        
            <MissingFieldsContainer>
                <MissingMessage>The following is missing a value. Press Submit again or enter the missing fields.</MissingMessage>
                <List>
                        {!title && <ListContent>Title</ListContent>}
                        {!mealType && <ListContent>Meal Type</ListContent>}
                        {!calories && <ListContent>Calories</ListContent>}
                        {!protein && <ListContent>Protein</ListContent>}
                        {!fats && <ListContent>Fats</ListContent>}
                        {!carbohydrates && <ListContent>Carbohydrates</ListContent>}
                </List>
            </MissingFieldsContainer>
        )
    }

    const handleSubmitButton = (e) => {
        e.preventDefault();

        const fieldsFilled = title && mealType && calories && protein && fats && carbohydrates;

        if (!fieldsFilled) {
            setMissingStatus(true);
        } else {
            setMissingStatus(false);
            setPayload({
                title,
                mealType,
                calories,
                protein,
                fats,
                carbohydrates
            });
            console.log(payload);
            if (submitCount < 1) {
                setSubmitCount(submitCount + 1);
            } else {
                dispatch(addLog(payload));
                console.log("adding log to persist");
            }
        }
    }

    return( 
        <Page>
            <Form>
                <InputContainer>
                    {missingStatus && (<SubmissionCheck title={title} mealType={mealType} calories={calories} protein={protein} fats={fats} carbohydrates={carbohydrates} />)}
                    <InputWrapper>
                        <Label>Title: </Label>
                        <Input type="text" id="title" value={title} placeholder="Enter title of meal" onChange={(e) => setTitle(e.target.value)}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Meal Type: </Label>
                        <Input type="text" id="mealType" value={mealType} placeholder="Enter the type of meal. Eg. Breakfast etc." onChange={(e) => setMealType(e.target.value)}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Protein: </Label>
                        <Input id="inpProtein" type="number" value={protein} onChange={(e) => setProtein(Number(e.target.value))}></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Fats: </Label>
                        <Input id="inpFats" type="number" value={fats} onChange={(e) => setFats(Number(e.target.value))}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Carbohydrates: </Label>
                        <Input id="inpCarbohydrates" type="number" value={carbohydrates} onChange={(e) => setCarbohydrates(Number(e.target.value))}/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label >Calories: </Label>
                        <Input type="number" id="calories" value={calories} placeholder="Press calculate to automatically enter" onChange={(e) => setCalories(e.target.value)}/>
                    </InputWrapper>
                    <ButtonWrapper>
                        <AutoCalorieButton onClick={handleCalorieCalculator}>Calculate Calories</AutoCalorieButton>
                        <AddButton onClick={handleSubmitButton}>Submit</AddButton>
                    </ButtonWrapper>
                </InputContainer>
            </Form>
        </Page>
    )
}
