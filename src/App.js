import React from 'react';
import { Grid , Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import beach from './assert/images/beach.jpg';

const useStyles = makeStyles(theme =>({
    root: {
      backgroundImage: `url(${beach})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    },
    container:{
      opacity: '0.9',
      height:'60%',
      marginTop: theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
          marginTop:0,
          with: '100%',
          height: '100%'
      }
    },
    div:{
      marginTop: theme.spacing(),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
}))

export const App = () => {
  const clases = useStyles() 
  return (
    <Grid container component='main' className={ clases.root}>
      <Container component= { Paper} elevation= {5} maxWidth='xs' className={ clases.container}>
        <div className={ clases.div}>

        </div>
      </Container>
    </Grid>
  )
}


export default App;
