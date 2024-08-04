// (c) 2024 Nathan Thimothe
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const GenCard = ({ sx, id, title, children }) => {
    const defaultSx = {
        paddingX: 5,
        paddingBottom: 2
    };
    return (
        <Grid item id={id} xs={12} sm={12} md={12} lg={12}>
            <Paper elevation={3} className="paper">
                <Box
                    sx={{
                        ...defaultSx, ...sx
                    }} >
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{
                            paddingTop: 3,
                            paddingBottom: 2,
                        }} >
                        <strong>{title}</strong>
                    </Typography>
                    {children}
                </Box>
            </Paper>
        </Grid>
    )
}

export default GenCard;

