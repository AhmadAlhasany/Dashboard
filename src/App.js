import CheckIcon from '@mui/icons-material/Check';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';
function App() {
  return (
    <div className="App">
      <CheckIcon />
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h2">
            Remind
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>

    </div>
  );
}

export default App;
