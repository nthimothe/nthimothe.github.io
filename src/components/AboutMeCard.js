// (c) 2024 Nathan Thimothe 
import Typography from '@mui/material/Typography';
import GenCard from './GenCard';

const AboutMe = ({ aboutMe }) => {
    return (
        <GenCard title={aboutMe.cardTitle} id={aboutMe.id}>
            {
                aboutMe.stanzas.map((item, index) => (
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        sx={{
                            paddingTop: 1,
                        }} >
                        {aboutMe.stanzas[index]}
                    </Typography>
                ))
            }
        </GenCard>
    )
}
export default AboutMe;