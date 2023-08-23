import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React from 'react'

export default function ProjectsCard({children,imgUrl}) {
  return (
    <div>
        <Card style={{width:"100%",backgroundColor:"#d4d8d4"}}>
            <CardMedia sx={{height:180}} image={imgUrl}/>
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="info" style={{color:"#20C997",borderColor:"#20C997" }}>Github</Button>
                <Button variant="contained" color="info" style={{backgroundColor:"#20C997"}}>Live Demo</Button>
            </CardActions>
        </Card>
    </div>
  )
}
