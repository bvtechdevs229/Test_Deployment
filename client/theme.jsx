import { createTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#5c67a3',
      main: '#010461', // Navigation bar color
      dark: '#2e355b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      main: '#02fa13', // Cart quantity and bin button
      dark: '#c60055',
      contrastText: '#000',
    },
    openTitle: '#3f4771',
    protectedTitle: '#010461',
    type: 'light',
  },
  overrides: {
    MuiAppBar: {
      root: {
        borderRadius: 15, // Set the border-radius as needed
      },
    },
  },
});

export default theme;
