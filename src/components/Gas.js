import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/card.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#43B748'  },
  },
});
export const Gas = () =>{
  return (
    <MuiThemeProvider theme={theme}>
    <div className= "content-gas">
      <div>¿Tu auto es a gas?</div>
      <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="no">
      <FormControlLabel value="si" control={<Radio color="primary" />} label="Sí" />      
        <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
      </RadioGroup>
    </FormControl>
    </div>
    
    </MuiThemeProvider >
  );
}
     