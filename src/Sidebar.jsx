import styled from "styled-components"
import react from 'react'
import dashboardLogo from '/src/Images/dashboard-logo.svg'

const SidebarContainer = styled.div`
    width: 15vw;
    min-width: 225px;
    height: 100vh;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    position: fixed;

    box-shadow: 0px 0px 5px #000000;
    border-radius: 0 1% 1% 0;
`;
const Brand = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    margin: calc((15vw - 200px)/2) auto;
`;

const NavContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const RedirectContainer = styled.button`
    all: unset;
    width: 100%;
    padding: 15px 20px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    &:hover {
        background-color: #444444;
        box-shadow: 0px 0px 5px #000000;
    }
`;

const Redirect = styled.nav`
    color: white;
    font-family: Roboto-Regular;
    font-size: 30px;
    /* margin-left: auto; */
`;

const Logo = styled.img`
    height: 25px;
    width: 25px;
    display: flex;
    align-self: center;
    justify-self: start;

    background-color: white;
`;
export default function Sidebar() {
    return(
        <SidebarContainer>
            <Brand />
            <NavContainer>
                <RedirectContainer className="DASHBOARD">
                    {/* <Logo src={dashboardLogo} /> */}
                    <Redirect>DASHBOARD</Redirect>
                </RedirectContainer>
                <RedirectContainer className="RECIPES">
                    <Redirect>RECIPES</Redirect>
                </RedirectContainer>
                <RedirectContainer className="MACROS">
                    <Redirect>MACROS</Redirect>
                </RedirectContainer>
                <RedirectContainer className="FITNESS">
                    <Redirect>FITNESS</Redirect>
                </RedirectContainer>
            </NavContainer>
        </SidebarContainer>
    );
}