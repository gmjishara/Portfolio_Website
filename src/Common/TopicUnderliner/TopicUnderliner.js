import React from 'react';
import "./style.css";
import { Box } from '@mui/material';

export default function TopicUnderliner() {
    const underlinerStyle={
        width:"80px",
        height:"3px",
        backgroundColor:"#20C997"
    }
  return (
    <div className='topicLiner'>
        <Box style={underlinerStyle}></Box>
    </div>
  )
}
