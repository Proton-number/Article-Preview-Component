import { Box, Stack, Typography, Paper,  List, ListItem, ListItemText, Avatar, Tooltip  } from '@mui/material'
import React from 'react'
import drawers from '/src/images/drawers.jpg'
import michelle from '/src/images/avatar-michelle.jpg'
import share from '/src/images/icon-share.svg'
import facebook from '/src/images/icon-facebook.svg'
import pinterest from '/src/images/icon-pinterest.svg'
import twitter from '/src/images/icon-twitter.svg'
import './Desktop.css'




function Desktop() {



  return (
   
     <Paper 
    sx={{
        width:{
            sm: '44em', //600
            lg: '63em' //1200s
        }
    }}
    id='desktop-view'
    >
        
       <Stack 
       direction='row' 
       spacing={{
        sm: 2, //600
        lg: 4 //1200
       }}>
       
       <Box 
       component='img' 
       src={drawers} 
       sx={{
        width:{
            sm: '200px', //600
            lg: '440px' //1200
        },
        height:{
            lg: '440px' //1200
        }
       }}
       />

       <Stack
        p={{
            sm: 3.5, //600
           lg: 8 //1200
       }} 
       spacing={1}  >

         <Typography variant='h5' sx={{textAlign:'left'}}>Shift the overall look and feel by adding these wonderful touches to furniture in your home</Typography>
           <Typography variant='subtitle1' sx={{textAlign:'left'}}>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</Typography>

     
           
       <Stack direction='row' spacing={4}>

        <Avatar 
        sx={{
            marginTop:{
                sm: '20px', //600
                lg:'20px' //1200
            }
        }} 
        src={michelle}/>
          
       
        <List>
               
       <ListItem disablePadding>
       
       <ListItemText 
       disableTypography 
       primary={<Typography variant='h5' style={{color:'rgba(15, 15, 15, 0.87)'}}>Michelle Appleton</Typography>} 
       secondary={<Typography variant='subtitle1' style={{color:'rgba(15, 15, 15, 0.87)', opacity:'60%'}}>28 Jun 2020</Typography>}
       />
       
       </ListItem>
        </List>
  
  <Tooltip 
  title={
  <Stack direction='row' p={3} spacing={3}  >
  <Typography variant='subtitle1' sx={{marginTop:'10px'}}>SHARE</Typography>
  <Avatar src={facebook} />
  <Avatar src={twitter} />
  <Avatar src={pinterest} />
  </Stack>
  }
  placement='top'
  arrow
  >
    <Avatar style={{marginTop:'20px', backgroundColor:'hsl(205, 73%, 81%)'}}  p={2}  >
        <Box  component='img'    src={share} />
    </Avatar>
  </Tooltip>
    
      
      
              </Stack>

       </Stack>

     

       </Stack>


    </Paper>
   
  )
}

export default Desktop
