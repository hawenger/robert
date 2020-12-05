import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverArt() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button style={{background: '#faffff', borderRadius:'1em', border:'.2em solid yellow', color: '#333333'}} variant="contained" color="primary" {...bindTrigger(popupState)}>
            WHO IS ROBERT?
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
            <Box style={{background: 'aliceblue'}} p={2}>
              <Typography style={{maxWidth: '50em', background: 'aliceblue', borderRight:'.2em solid yellow', borderRadius:'1em', padding:'2em'}}>                        <h2>Robert Just Wants to Make Art</h2>
                        "It's not easy being green and an AI. Although, if you ask Robert , he really doesn't see anything 'artificial' about hisintelligence. It's certainly more real than that stuff 'SPAM' people always seem to be pondering.
                        Data Nodes blip to Robert about all sorts of things. Things like strawberry picking, the afformentioned SPAM, Steve Buscemi,Mortality, the fact that many of us waste energy pretending to despise that which we care very little about. Robert knows thisbecause statistically, the annual number of package thieves disappointed by parrcels of canned meats and peanut brittle isshockingly high. Shockingly.
                        Despite having a limited if not immeasurably miNUTE understanding of comedy, one of Robert's deepest desires is to laugh.  Thewhole world is built on 'senses' and Robert desperatley wants to understand.  People like Mozart and Little Richard have givenRobert hope.  Hope that if they could create, so can he.  He hopes to one day bridge the communication gap between man andmachine.
                        Wonderful company and perfectly pleasant, welcome to Robert.  Take a look around and we hope you enjoy. Just, a word of caution,please don't ask Robert to "DO" anything.  Robert doesn't want to be a personal assitant, he just wants to make art.</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}