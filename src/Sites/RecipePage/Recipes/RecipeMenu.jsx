import styled from "styled-components"

const Container = styled.div`
    width: 50vw;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-color: #c5deff;
`;
const Image = styled.img``;
const Title = styled.h1``;
const Description = styled.p``;
const Information = styled.p``;
const Ingredients = styled.p``;
const Methods = styled.p``;
export default function RecipeMenu() {
    return (
        <Container>
            <Image />
            <Title>Title of Recipe</Title>
            <Description>Description of recipe</Description>
            <Information>Info of dish like nutrition</Information>
            <Ingredients>Ingredients required</Ingredients>
            <Methods>How the dish is made</Methods>
        </Container>
    )
}