import React, {useState} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useStoreContext } from "../../services/GlobalState";
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

export default function Navbar() {
    const [state, dispatch] = useStoreContext();
    
        const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [anchorEl2, setAnchorEl2] = React.useState(null);

      const handleClick2 = (event) => {
        setAnchorEl2(anchorEl2 ? null : event.currentTarget);
      };
    
      const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
      };
      const handleClose2 = (event) => {
        setAnchorEl2(null);
      }
      const handleClose = (event) => {
        setAnchorEl(null);
      }
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

      const open2 = Boolean(anchorEl2);
      const id2 = open2 ? 'simple-popper' : undefined;
  
    
        
        const [returningButton] = useState("Show Me Something!")
    
    return (
        <>  
            <Link to="/world" className="bottom-market" style={state.display}><i style={{color:'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} className="fa fa-map-signs" aria-hidden="true"></i></Link>
            <Link onMouseEnter={handleClick} onMouseLeave={handleClose}  to="/aboutrobert" className="bottom-market" style={state.display}><i style={{color:'rgba(255, 53, 46, 0.46)', fontSize:'5em', textShadow: '1px 2px 0px #010000'}} class="fa fa-child" aria-hidden="true"></i></Link>
            <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>About Robert</div>
            </Popper>
        </>
    )
}
