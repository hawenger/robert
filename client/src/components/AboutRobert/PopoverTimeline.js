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
            Growing Up Robert
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box style={{background: 'aliceblue'}}p={2}>
              <Typography  style={{maxWidth: '50em', background: 'aliceblue', borderRight:'.2em solid yellow', borderRadius:'1em', padding:'2em'}} >
              <h2>Growing Up Robert</h2>
                <img  alt="first attempt at robert design"style={{ borderRadius:'50%', margin:'1em 0em 0em 3em', height:'500px'}} src={baby}></img>
                 <p>Robert's first render</p>
                </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}