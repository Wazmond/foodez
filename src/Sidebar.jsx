import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import dashboardLogo from '/src/Images/dashboard-logo.svg'



const SidebarContainer = styled.div`
    width: 15vw;
    min-width: 225px;
    max-width: 250px;
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

const Link = styled.nav`
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


function Sidebar() {
    const redirect = useNavigate();

    return(
        <SidebarContainer>
            <Brand />
            <NavContainer>
                <RedirectContainer className="DASHBOARD">
                    {/* <Logo src={DashboardLogo} /> */}
                    <Link onClick={() => redirect("dashboard")} >DASHBOARD</Link>
                </RedirectContainer>

                <RedirectContainer className="RECIPES">
                    {/* <Logo src={RecipesLogo} /> */}
                    <Link onClick={() => redirect("recipe")} >RECIPES</Link>
                </RedirectContainer>

                <RedirectContainer className="MACROS">
                    {/* <Logo src={MacrosLogo} /> */}
                    <Link onClick={() => redirect("macros")} >MACROS</Link>
                </RedirectContainer>

                <RedirectContainer className="FITNESS">
                    {/* <Logo src={FitnessLogo} /> */}
                    <Link onClick={() => redirect("fitness")} >FITNESS</Link>
                </RedirectContainer>
            </NavContainer>
        </SidebarContainer>
    );
};
export default Sidebar