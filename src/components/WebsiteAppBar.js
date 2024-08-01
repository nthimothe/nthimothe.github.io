// (c) 2024 Nathan Thimothe
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const WebsiteAppBar = ({ title, navItems, handleDrawerToggle, mobileOpen }) => {
    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                component='nav'
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }} >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, display: { sm: 'block' } }}
                    >
                        {title}
                    </Typography>
                    {!mobileOpen &&
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.title} href={item.href} size='large' sx={{ color: '#fff', textTransform: 'none' }} >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default WebsiteAppBar;