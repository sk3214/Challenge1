import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getDistance } from 'geolib';


const Distance = () => {
  const [pointA,setPointA] = useState('')
  const [pointB,setPointB] = useState('')
  const [dist,setDist] = useState(0)
  const onChangeHandlerPointA = (event) =>{
    setPointA(event.target.value);
    console.log(event.target.value);
  }
  const onChangeHandlerPointB = (event) =>{
    setPointB(event.target.value);
    console.log(event.target.value);
  }
  const onclickHandler = ()=>{
    const pointaArr = pointA.split(',');
    const pointbArr = pointB.split(',');
    // const pointALat = pointaArr[0];
    // const pointALong = pointaArr[1];
    // const pointBLat = pointbArr[0];
    // const pointBLong = pointbArr[1];
    const distance = getDistance(pointaArr,pointbArr);
    setDist(distance/1000);
  }
  return (
<Grid container direction={"row"} spacing={5} sx={{padding:2}}>
  <Grid item>
    <TextField label="point A" variant="outlined" onChange={onChangeHandlerPointA} value={pointA} required/>
    <p>{pointA}</p>
  </Grid>
  <Grid item>
    <TextField label="point B" variant="outlined" onChange={onChangeHandlerPointB} value={pointB} required/>
    <p>{pointB}</p>
  </Grid>
  <Grid item sx={{marginTop:1}}>
    <Button variant='contained' onClick={onclickHandler}>calculate</Button>
  </Grid>
  <Grid item>
    {/* <TextField label="point B" variant="outlined" onChange={onChangeHandlerPointB} value={pointB} required/> */}
    <p>{dist}Km</p>
  </Grid>

</Grid>
  );
}

export default Distance