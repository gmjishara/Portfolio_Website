import { Box } from '@mui/material'
import React from 'react'

export default function SectionLayout({ children }) {
    const layoutStyle={
        backgroundColor:"white",
        padding:"80px 50px"
    }
  return (
    <div>
        <Box style={layoutStyle} >
            {children}
        </Box>
    </div>
  )
}
