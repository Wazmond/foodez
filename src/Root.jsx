import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0077ff;
`;

const Main = styled.div`
  height: 100vh;
  width: calc(100vw - 225px);
  margin-left: auto;
  padding: 15px;
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