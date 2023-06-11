import { Button } from '@mui/base';
import { TextField } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';

export default function Chat() {
  
  const [answer, setAnswer] = useState();

  async function onClick() {
    try {
      const response = await axios.get(
        "http://192.168.15.179:6001/api/v1/gpt/"
      )
      setAnswer(response.data)
    }
    catch(err) {
      console.log(err)
    }
  }
  
  return (
    <>
      <Button onClick={onClick}>sds</Button>
      <h1>{answer}</h1>
      <TextField fullWidth>{answer}</TextField>
    </>
  );
}