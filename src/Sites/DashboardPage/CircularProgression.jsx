import styled from 'styled-components'

const CircleContainer = styled.div`
    height: 100px;
    width: 100px;
    display: flex;
`;

const MainCircle = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
`;
const InnerCircle = styled.div`
    height: 80px;
    width: 80px;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 10;
    position: relative;
    margin: auto;
`;

export default function CircularProgression({ percentage, colour }) {
    const gradientStyling = {
        background: `conic-gradient(${colour} ${percentage}%, #dddddd ${percentage}%)`,
    };
    return(
        <CircleContainer>
            <MainCircle style={gradientStyling} />
            <InnerCircle/>
        </CircleContainer>
    )
}