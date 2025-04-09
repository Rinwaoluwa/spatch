import { Theme as MuiTheme } from '@mui/material';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}
