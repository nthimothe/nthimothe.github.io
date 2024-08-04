// (c) 2024 Nathan Thimothe
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Title from './Title';
import aboutMe from '../data/aboutMe.json';
import projects from '../data/projects';
import experiences from '../data/experiences';
import education from '../data/education';
import contactInfo from '../data/contact';
import AboutMe from './AboutMeCard';
import Projects from './Projects';
import BasicCard from './BasicCard';
import '../css/GenCard.css';

const MainContainer = ({ title }) => {
    return (
        <Container maxWidth={false} disableGutters>
            <Box
                sx={{
                    p: 5
                }} >
                <Toolbar />
                <Title title={title} />
                <Grid container spacing={5}>
                    <AboutMe aboutMe={aboutMe} />
                    <Projects projects={projects} />
                    <BasicCard info={experiences} />
                    <BasicCard info={education} />
                    <BasicCard info={contactInfo} />
                </Grid>
            </Box>
        </Container>
    );
}

export default MainContainer; 