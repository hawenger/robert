import React, {useState} from 'react'
import { useStoreContext} from "../../services/GlobalState";
import { SET_ROBERT_MOOD_RETURNING, DISPLAY_OBJECT, HIDE } from "../../services/actions";
import robertService from '../../services/robertService'; 
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid red',
      borderRadius: '1em',
      padding: theme.spacing(1),
      backgroundColor: '#8B0C14',
      color:'white',
      textTransform: 'uppercase'
    },
  }));

export default function CallRobertMood(props) {

    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

    
    const [returningButton] = useState("Show Me Something!")

    const [state, dispatch] = useStoreContext();
    
    //Holds random mood result
    let randomMood;

    //Call API to get all moods
    const setRobertReturning = () => {
        robertService.getAllMood({

        })
        .then(result => {  
          const clearTitle = null; 
          const toggleOn = true;
          const toggleOff = false;
          randomMood= result[Math.floor(Math.random()*result.length)];
          dispatch({
            type: SET_ROBERT_MOOD_RETURNING,
            mood: randomMood.mood,
          });
          dispatch({
              type: DISPLAY_OBJECT,
              yesNoButtons: toggleOn,
              displayButton: toggleOff,
              speech: randomMood.innerText,
              title: clearTitle
            });
        dispatch({
            type: HIDE
        });
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>What's on Robert's Mind?</div>
            </Popper>
            <button onMouseLeave={handleClose} onMouseOver={handleClick} className="bottom-market" style={state.display} onClick={setRobertReturning}><i style={{color: 'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-user" aria-hidden="true"></i></button>
        </>
    )
}

