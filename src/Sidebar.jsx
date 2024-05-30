import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import dashboardLogo from '/src/Images/dashboard-logo.svg'



const SidebarContainer = styled.div`
    width: 225px;
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
    margin: 12.5px;
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
                <RedirectContainer className="DASHBOARD" onClick={() => redirect("dashboard")}>
                    {/* <Logo src={DashboardLogo} /> */}
                    <Link >DASHBOARD</Link>
                </RedirectContainer>

                <RedirectContainer className="RECIPES" onClick={() => redirect("recipe")}>
                    {/* <Logo src={RecipesLogo} /> */}
                    <Link >RECIPES</Link>
                </RedirectContainer>

                <RedirectContainer className="MACROS" onClick={() => redirect("macros")}>
                    {/* <Logo src={MacrosLogo} /> */}
                    <Link >MACROS</Link>
                </RedirectContainer>

                <RedirectContainer className="FITNESS" onClick={() => redirect("fitness")}>
                    {/* <Logo src={FitnessLogo} /> */}
                    <Link >FITNESS</Link>
                </RedirectContainer>
            </NavContainer>
        </SidebarContainer>
    );
};
export default Sidebar