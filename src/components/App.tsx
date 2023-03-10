import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    PaletteMode,
    Paper,
    Typography,
    TextField,
    Grid,
    Card,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Summary from "./text/Summary";

function App() {
    const [mode, setMode] = useState<PaletteMode>("light");

    const lightTheme = createTheme({
        /*
        palette: {
            mode: "light",
            primary: {
                main: "#0288D1",
                contrastText: "#053858",
            },
            secondary: {
                main: "#546E7A",
            },
        },
        */
        palette: {
            mode: mode === "dark" ? "dark" : "light",
            primary: {
                main: "#3e89a8",
                dark: "#2b5f76",
                light: "#64a0b8",
                contrastText: "rgb(35,70,85)",
            },
            secondary: {
                main: "#7a8498",
                light: "#949cac",
                dark: "#555c6a",
                contrastText: "#ffffff",
            },
            error: {
                main: "#ff1000",
                light: "#ff3f33",
                dark: "#b20b00",
                contrastText: "#ffffff",
            },
            info: {
                main: "#317f59",
                contrastText: "#ffffff",
                dark: "#22583e",
                light: "#5a987a",
            },
            success: {
                main: "#60e475",
                light: "#7fe990",
                dark: "#439f51",
                contrastText: "#000000",
            },
            warning: {
                main: "#ff9800",
                light: "#ffac33",
                dark: "#b26a00",
                contrastText: "#030303",
            },
        },
    });

    function handleThemeChange() {
        mode === "light" ? setMode("dark") : setMode("light");
    }

    return (
        <div className="App">
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Paper
                    sx={
                        mode === "light"
                            ? { bgcolor: "#cfcfcf", minHeight: "100vh" }
                            : { bgcolor: "#37474F", minHeight: "100vh" }
                    }
                >
                    <Navbar
                        mode={mode}
                        handleThemeChange={handleThemeChange}
                    ></Navbar>
                    <Grid2
                        container
                        padding={"1vh"}
                        direction="column"
                        justifyContent={"center"}
                        spacing={0}
                        alignItems={"center"}
                    >
                        <Grid item xs={3}>
                            <Summary />
                        </Grid>
                    </Grid2>
                </Paper>
            </ThemeProvider>
        </div>
    );
}

export default App;
