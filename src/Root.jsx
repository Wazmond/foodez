import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Main = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Root = () => {
    return(
        <Container>
            <Sidebar/>
            <Main>
                <Outlet />
            </Main>       
        </Container>
    )
}

export default Root