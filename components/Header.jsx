import React from 'react'
import { AppBar, Toolbar, Typography,Button } from "@material-ui/core"
import SvgIcon from '@material-ui/core/SvgIcon';
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
//import getPageContext from '../lib/getPageContext'

export default props =>

      <AppBar  position="static">
        <Toolbar>         
          <Typography variant="h1" color="inherit">
            Leximpact
          </Typography>
          
              
          <Button color="inherit">
          	Vos Retours !
          </Button>
          
        </Toolbar>
      </AppBar>
  

