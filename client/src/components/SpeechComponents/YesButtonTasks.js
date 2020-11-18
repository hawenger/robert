import React from 'react';
import { useStoreContext} from "../../services/GlobalState";
import { SET_PROJECT, DISPLAY_OBJECT, SHOW } from "../../services/actions";
import robertService from '../../services/robertService'; 

export default function YesButtonTasks(props) {
    const [state, dispatch] = useStoreContext();

let randomProject;

const YesButtonTasks = () => {
    robertService.getAllProject({

    })
    .then(result => {
        const linkDisplay= true;
        const toggleOff = false;
        const toggleOn = true;
      randomProject= result[Math.floor(Math.random()*result.length)];
      dispatch({
        type: SET_PROJECT,
        title: randomProject.title,
        link: randomProject.link,
        description: randomProject.description
      });
      dispatch({
        type:  DISPLAY_OBJECT,
        showLink: linkDisplay,
        yesNoButtons: toggleOff,
        displayButton: toggleOn,
        speech: randomProject.description,
        link: randomProject.link
    });
    dispatch({
        type:  SHOW,
    });
    })
    .catch(err => console.log(err));
};
    return (
        <>
            <button className="yesnobtns yes-btn" onClick={YesButtonTasks}>YES</button>
        </>
    )
}




    

