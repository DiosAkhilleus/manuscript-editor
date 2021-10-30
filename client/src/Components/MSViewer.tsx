import React from 'react'
import TextField from '@mui/material/TextField';
import Iframe from 'react-iframe';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    
}

const MSViewer = (props: Props) => {

  const [msURL, setMSURL] = useState('');
  useEffect(() => {
    console.log(msURL);
  }, [msURL]);


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <TextField style={{marginTop: 20}} label='Enter MS URL Here' variant='filled' onChange={(e) => setMSURL(e.target.value)} />
      <Button style={{margin: 10}} variant='contained' color='primary' >Set URL</Button>
    </div>
    )
}

export default MSViewer
