import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import CustomCheckbox from "../../../components/Checkbox";
import { useDispatch } from "react-redux";
import { Informations, SwitchSelection, AlarmWrapper } from "./styles";

export default React.memo(({ hours,minutes, identifier, checked }) => {
  const dispatch = useDispatch();
  
  let alarmTime = hours + ":" + minutes;
  let alarmName = "Hello Honey";
  let alarmFrequency = "Everyday";
  // let alarmRepetition = "10 minutes";
  // let alarmSound = "Alarmes";
  const [switcherChecked, setSwitcherChecked] = useState(false);

  let alarmNameColor = "white";
  if (switcherChecked) alarmNameColor = "blue";

  return (
    <AlarmWrapper>
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
    </AlarmWrapper>
  );
})
