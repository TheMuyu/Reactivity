import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '15px' }} />
                    REACTIVITIES
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Activities" />
                <Menu.Item as={NavLink} to='/about' name="About" />
                <Menu.Item as={NavLink} to='/errors' name="Test Erros" />
                <Menu.Item>
                    <Button as={NavLink} to='/create' positive content="Create Activity" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(Navbar)
