// (c) 2024 Nathan Thimothe
import Typography from '@mui/material/Typography';

const Title = ({ title }) => {
    return (
        <Typography
            variant="h4"
            component="h4"
            align="left"
            sx={{
                paddingTop: 1,
                paddingBottom: 4,
                align: "left"
            }} >
            <strong>{title}</strong>
        </Typography>
    )
}
export default Title;