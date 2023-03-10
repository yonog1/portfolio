import { ModeNight, LightMode, GitHub, LinkedIn } from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Switch,
    IconButton,
    PaletteMode,
} from "@mui/material";

interface Props {
    mode: PaletteMode;
    handleThemeChange: () => void;
}

function Navbar({ mode, handleThemeChange }: Props) {
    return (
        <>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box display="flex" alignItems="center">
                        {mode === "dark" ? (
                            <ModeNight sx={{ color: "yellow" }}></ModeNight>
                        ) : (
                            <LightMode sx={{ color: "yellow" }}></LightMode>
                        )}
                        <Switch onChange={handleThemeChange} />
                    </Box>
                    <Typography variant="h4" fontFamily={"Segoe UI"}>
                        Yonatan Goldin
                    </Typography>
                    <Box display={"flex"}>
                        <IconButton
                            size="large"
                            href="https://www.linkedin.com/in/yonatan-goldin-098b221b3/"
                            rel="noopener noreferrer"
                            target={"_blank"}
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            size="large"
                            href="https://github.com/yonog1"
                            rel="noopener noreferrer"
                            target={"_blank"}
                        >
                            <GitHub />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;
