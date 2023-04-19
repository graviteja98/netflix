import { Container,List, ListItem,ListItemButton,Divider, Typography } from '@mui/material'
import React from 'react'

function Navhead() {
  return (
   <Container sx={{ bgcolor:"primary" , p:2}} >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <Typography variant='h2' fontWeight={900}>Netflix</Typography>   
            </ListItemButton>
            </ListItem>
            </List>
            <Divider />
   </Container>
  )
}

export default Navhead