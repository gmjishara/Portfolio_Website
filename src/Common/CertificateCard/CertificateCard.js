import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import React from 'react'

export default function CertificateCard({children, imgUrl}) {
  return (
    <div>
        <Card style={{ width: "100%", backgroundColor: "#d4d8d4" }}>
        <CardMedia sx={{ height: 250,margin:"10px" }} image={imgUrl} />
        <CardContent>{children}</CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="info"
            style={{ backgroundColor: "#20C997" }}
          >
            More Info
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
