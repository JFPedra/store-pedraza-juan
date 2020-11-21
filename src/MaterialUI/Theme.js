import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "grey",
      },
      track: {
        color: 'white'
      },
      rail: {
        color: 'black',
      }
    }
}
});

export default muiTheme