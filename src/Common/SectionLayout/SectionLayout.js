import { Box } from '@mui/material'
import React from 'react';
import "./style.css";
import TopicUnderliner from '../TopicUnderliner/TopicUnderliner';

export default function SectionLayout({ children,heading,topic,bgColor }) {
    const layoutStyle={
        backgroundColor:`${bgColor}`,
        padding:"120px 50px"
    }
  return (
    <div>
        <Box style={layoutStyle} className="layout">
          <Box className="headSection">
            <h1 className="bigHeading">{heading}</h1>
            <h1 className="headingTopic">{topic} <TopicUnderliner/></h1>
          </Box>

            {children}
        </Box>
    </div>
  )
}
