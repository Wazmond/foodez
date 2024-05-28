import { Outlet } from 'react-router'
import Sidebar from './sidebar'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
`;

const Root = () => {
    return(
        <Container>
            <Sidebar/>
            <Outlet />        
        </Container>
    )
}
export default Root