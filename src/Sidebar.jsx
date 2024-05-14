import styled from "styled-components"
import react from 'react'

const SidebarContainer = styled.div`
    width: 15vw;
    height: 100vh;
    background-color: #333333;
    display: flex;
    flex-direction: column;

`;
const Logo = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    margin: calc((15vw - 200px)/2) auto;
`;

const NavContainer = styled.div`
    width: 100%;
    height: 100%;
`;
const Dashboard = styled.div`
    width: 100%;
    height: 100%;
    background-color: #6b6b6b;
`;

export default function Sidebar() {
    return(
        <SidebarContainer>
            <Logo />
            <NavContainer>
                <Dashboard>

                </Dashboard>
            </NavContainer>
        </SidebarContainer>
    );
}