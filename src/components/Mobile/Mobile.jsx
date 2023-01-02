import React from 'react'
import { Box, Stack, Typography, Paper,  List, ListItem, ListItemText, Avatar, Tooltip  } from '@mui/material'
import drawers from '/src/images/drawers.jpg'
import michelle from '/src/images/avatar-michelle.jpg'
import share from '/src/images/icon-share.svg'
import facebook from '/src/images/icon-facebook.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'
import '/src/components/Mobile/Mobile.css'

function Mobile() {
  return (
    <Paper  
    id='mobile-view' 
    sx={{
        width:{
           xs: '20em'
        } , 
        borderRadius:'24px'
        }}>
      
      <Box component='img' sx={{width:'332px', height:'200px', borderTopLeftRadius:'24px', borderTopRightRadius:'24px'}} src={drawers} />

      <Stack p={3} spacing={2}>
       
       <Typography variant='h5'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</Typography>
       <Typography>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</Typography>

       
      <Stack  direction='row' spacing={2.4}>
        
        <Avatar sx={{marginTop:'20px'}} src={michelle}/>
            
        <List>
                 
                 <ListItem disablePadding>
                 
                 <ListItemText 
                 disableTypography 
                 primary={<Typography variant='h6' style={{color:'rgba(15, 15, 15, 0.87)'}}>Michelle Appleton</Typography>} 
                 secondary={<Typography variant='subtitle1' style={{color:'rgba(15, 15, 15, 0.87)', opacity:'60%'}}>28 Jun 2020</Typography>}
                 />
                 
                 </ListItem>
                  </List>
  
                  <Tooltip 
    title={
    <Stack direction='row' p={{xs:1}}    spacing={1}  >
    <Typography variant='subtitle1' >SHARE</Typography>
    <Avatar sx={{width:'20px', height:'20px'}}  src={facebook} />
    <Avatar  sx={{width:'20px', height:'20px'}}  src={twitter} />
    <Avatar  sx={{width:'20px', height:'20px'}}  src={pinterest} />
    </Stack>
    }
    placement='top'
    arrow
    enterTouchDelay={0}
    >
      <Avatar style={{marginTop:'20px', backgroundColor:'hsl(205, 73%, 81%)'}}  p={2}  >
          <Box  component='img'    src={share} />
      </Avatar>
    </Tooltip>
  
        </Stack>
  

      </Stack>

    </Paper>
  )
}

export default Mobile
