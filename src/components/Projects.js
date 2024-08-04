// (c) 2024 Nathan Thimothe
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GenCard from './GenCard';

const Projects = ({ projects }) => {
    const interCardPadding = {
        paddingTop: 2,
        paddingBottom: 4,
        paddingX: 5,
    }
    return (
        <GenCard
            id={projects.id}
            title={projects.cardTitle}
            sx={{ paddingBottom: 4 }} >
            {
                projects.list.map((project) => (
                    <Link href={project.link} underline='none'>
                        <Grid item xs={12} md={12} paddingTop={2}>
                            <Paper elevation={2} className="paper" sx={{ "&:hover": { boxShadow: 10 } }}>
                                <Box align="center" sx={interCardPadding} >
                                    {project.icon}
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{
                                            paddingTop: 1,
                                            paddingBottom: 2,
                                        }}
                                        align="center" >
                                        <strong>{project.projectTitle}</strong>
                                    </Typography>
                                    {
                                        project.stanzas.map((stanza) => (
                                            <Typography
                                                variant="body"
                                                sx={{
                                                    paddingTop: 1,
                                                }}
                                                align="center" >
                                                {stanza}
                                            </Typography>
                                        ))
                                    }
                                </Box>
                            </Paper>
                        </Grid>
                    </Link>
                ))
            }
        </GenCard >
    )
}
export default Projects;