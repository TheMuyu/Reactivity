import { Link } from 'react-router-dom'
import { Button, Container, Header, Segment, Image } from 'semantic-ui-react'

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities' />
                <Header as='h3' inverted content='Developed on React 17 & Net 5.' />
                <Header as='h4' style={{ marginTop: '-10px' }} inverted content='Also with Axios, MobX, ReactRouter, UUid, Semantic-UI, React-Calendar.' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the Activities!
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage
