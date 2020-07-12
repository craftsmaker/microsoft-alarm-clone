import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import CustomCheckbox from "../../../components/Checkbox";
import { useDispatch } from "react-redux";
import { Informations, SwitchSelection } from "./styles";
export { StyledAlarm as default } from "./styles";

export function Alarm({ alarm, identifier, checkedAlarmIDs, className }) {
  const dispatch = useDispatch();
  
  let alarmTime = alarm.hours + ":" + alarm.minutes;
  let alarmName = "Hello Honey";
  let alarmFrequency = "Everyday";
  // let alarmRepetition = "10 minutes";
  // let alarmSound = "Alarmes";
  const checked = checkedAlarmIDs.some((id) => identifier === id);
  const [switcherChecked, setSwitcherChecked] = useState(false);

  let alarmNameColor = "white";
  if (switcherChecked) alarmNameColor = "blue";

  return (
    <div className={className}>
      <CustomCheckbox
        checked={checked}
        onClick={(e) => dispatch({ type: "TOGGLE_ALARM_CHECK", identifier })}
      />
      <Informations>
        <h1>{alarmTime}</h1>
        <p style={{ color: alarmNameColor, fontSize: "0.8em" }}>{alarmName}</p>
        <p>{alarmFrequency}</p>
      </Informations>
      <SwitchSelection>
        <Switch
          checked={switcherChecked}
          onChange={() => setSwitcherChecked((prev) => !prev)}
          color="default"
        />
        {switcherChecked ? <p>Ativado</p> : <p>Desativado</p>}
      </SwitchSelection>
    </div>
  );
}
