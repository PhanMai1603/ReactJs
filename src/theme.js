import { deepOrange, orange, red, teal, cyan} from '@mui/material/colors'
import { experimental_extendTheme as extendTheme} from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
        }
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  })
export default theme;