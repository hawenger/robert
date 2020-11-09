import React, { useContext } from "react";
import DeveloperContext from "../utils/DeveloperContext";

function DeveloperInfo() {
  const { mood, actions, userid, returning, speechbubbletext, buttontext} = useContext(DeveloperContext);

  return (
    <div className="card">
      <div>
        USER ID: {userid}
      </div>
      <div>
        Mood: {mood}
      </div>
      <div>
        Actions: {actions}
      </div>
      <div>
        Returning: {returning}
      </div>
      <div>
        Speech Bubble: {speechbubbletext}
      </div>
      <div>
        Button Text: {buttontext}
      </div>
    </div>
  );
}

export default DeveloperInfo;
