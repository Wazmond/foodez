import styled from "styled-components";

const PantryInventoryContainer = styled.div`
    font-size: 20px;
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px #686868;
    border-radius: 20px;
    h2 {
        text-align: center;
    }
`;
const DividerLine = styled.div`
    width: 80%;
    height: 0px;
    border: 1px solid grey;
    margin: 0 auto;
`;

const PantryInventory = styled.ol`
    list-style-type: none;

    li {
        margin-left: 15px;
    }
`;

export default function Inventory() {
    return(
        <PantryInventoryContainer>
            <h2>Current Inventory</h2>
            <DividerLine />
            <PantryInventory>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
                <li>item 5</li>
            </PantryInventory>
        </PantryInventoryContainer>
    );
}