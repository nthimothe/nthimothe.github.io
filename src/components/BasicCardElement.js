// (c) 2024 Nathan Thimothe
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const BasicCardElement = ({ titleMarginTop, element }) => {
    return (
        <Link href={element.link} underline='none'>
            <Grid item xs={12} md={12} paddingTop={2} >
                <Paper elevation={2} className="paper" sx={{ "&:hover": { boxShadow: 10 } }}>
                    <Box display="flex"
                        sx={{
                            paddingTop: 2,
                            paddingBottom: 2,
                            paddingX: 2,
                        }}
                        align="left" >
                        <Box align="left" mr={2} >
                            <img src={element.icon} className={`icon ${element.iconFilter ? element.iconFilter : ''}`} />
                        </Box>
                        <Box >
                            <Typography variant="h6" component="h6" marginTop={titleMarginTop ? titleMarginTop : 2}
                                sx={{
                                    overflowWrap: 'break-word', // Ensures long words break
                                    wordBreak: 'break-word',    // Ensures words break properly
                                }}>
                                {element.title}
                            </Typography>
                            {element.caption &&
                                <Typography variant="body" component="body" paddingTop={1}>
                                    {element.caption}
                                </Typography>
                            }
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </Link>
    )

}

export default BasicCardElement;