import React from 'react';
import { Grid , Container, Paper, Avatar, Typography, TextField, Button, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import beach from './assert/images/beach.jpg';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { useState } from 'react';

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
      marginTop: theme.spacing(20),
      [theme.breakpoints.down(400 + theme.spacing(2) + 2)]:{
          marginTop:0,
          with: '100%',
          height: '100%',
      }
    },
    div:{
      marginTop: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar:{
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main
    }, 
    form:{
      width: '100%',
      marginTop: theme.spacing(1)

    }, 
    button:{
      margin: theme.spacing(3, 0, 2 )
    }
}))

export const App = () => {

  const [body, setBody] = useState({nickname: '' , password: ''})
  const clases = useStyles() 

  const handleChange = e =>{
      setBody({
        ...body,
        [e.target.name]: e.target.value

      })
  }
   const onSubmit = () =>{
     console.log(body)
   }
  
  return (
    <Grid container component='main' className={ clases.root}>
      <CssBaseline/>
      <Container component= { Paper} elevation= {5} maxWidth='xs' className={ clases.container}>
        <div className={ clases.div}>
          <Avatar className={ clases.avatar}>
              <LockOutlinedIcon/>
          </Avatar>
          <Typography className='h1' variant='h6' >
            Sign In 
          </Typography>
          <form className={ clases.form}>
            <TextField
              fullWidth
              autoFocus
              color='primary'
              margin='normal'
              label='Nickname' 
              variant='outlined'  
              name='nickname'   
              value={ body.nickname}  
              onChange= {handleChange}    
            />
            <TextField
              fullWidth
              color='primary'
              margin='normal'
              label='Password' 
              variant='outlined'   
              type='password' 
              name= 'password'
              value={ body.password}   
              onChange= {handleChange}          
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={ clases.button}
              onClick = {()=> onSubmit()}
            
            >
              Ingresar
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  )
}


export default App;
