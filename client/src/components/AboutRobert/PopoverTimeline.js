import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import baby from './Assets/Images/baby.PNG';

export default function PopoverTimeline() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button style={{background: '#faffff', borderRadius:'1em', border:'.2em solid yellow', color: '#333333'}} variant="contained" color="primary" {...bindTrigger(popupState)}>
            CONTACT
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
          >
            <Box style={{background: 'aliceblue'}}p={2}>
              <Typography  style={{maxWidth: '50em', background: 'aliceblue', borderRight:'.2em solid yellow', borderRadius:'1em', padding:'2em'}} >
              <div style={{background: 'aliceblue'}}>
                <h2>CONTACT ME</h2>
                <a style={{color:'#9DC3C2'}}href="mailto: hamecow@gmail.com">EMAIL:</a> hamecow@gmail.com
                <br></br><br></br>
                <a style={{color:'#2274A5'}} href="https://github.com/hawenger">GITHUB:</a> hawenger
                <br></br><br></br>
                <a style={{color:'#77A6B6'}} href="https://hawenger.github.io/">WEBSITE:</a> hawenger.github.io/
                <br></br><br></br>
                <a style={{color:'#4D7298'}} href="https://www.linkedin.com/in/hannah-wenger-5598131a5/"> LINKED-IN:</a> Hannah Wenger
                <br></br><br></br>
              </div>
                </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}