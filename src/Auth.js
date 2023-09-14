import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';


const Auth = () => {
	const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name:'',
    email:'',
    password:'',
  });
  const handleChange =(e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };
  const handleSubmit = async (e) => {
    // e.preventFefault();
    const resp = await axios({
      url: 'https://randomuser.me/api/',
      method: 'get',
    })
    if(resp.status === 200){
      console.log(resp.data)
    }

  }
  return (
    <div>
      <form >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: 5,
            padding: 3,
            borderRadius: 5,
            boxShadow: '5px 5px 10px #ccc',
            '&:hover': {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant='h2' padding={3} textAlign='center'>
            {isSignup ? 'Signup' : 'Signin'}
          </Typography>
          {isSignup && (<TextField onChange={handleChange} name='name' value={inputs.name} margin='normal' type='text' variant='outlined' placeholder='Name' />)}
          <TextField onChange={handleChange} name='email' value={inputs.email}  margin='normal' type='email' variant='outlined' placeholder='Email' />
          <TextField onChange={handleChange} name='password' value={inputs.password} margin='normal' type='password' variant='outlined' placeholder='Password' />
          <Button  sx={{ marginTop: 3, borderRadius: 3 }} onClick={handleSubmit} variant='contained' color='warning'>
            {isSignup ? 'Sign up' : 'Sign in'}
          </Button>
          <Button onClick={() => setIsSignup(!isSignup)} sx={{ marginTop: 3, borderRadius: 3 }}>Change to {isSignup ? 'Login' : 'Signup' }</Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
