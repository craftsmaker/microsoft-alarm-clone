import React from "react";
import maximizeIcon from "../../assets/maximize.svg";
import { remote } from "electron";
import {WindowMenuWrapper} from "./styles";

const WindowMenu = React.memo(({backgroundColor}) => {
  let mainWindow = remote.getCurrentWindow();

  const handleMaximizeAndMinimize = () => {
    mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize();
  };
  console.log("WMenu",backgroundColor)
  return (
    <WindowMenuWrapper backgroundColor={backgroundColor}>
      <div>
        <p>Alarmes e Relógio</p>
      </div>
      <ul>
        <li>
          <button className="button" onClick={() => mainWindow.minimize()}>
            <p>__</p>
          </button>
        </li>
        <li>
          <button className="button" onClick={handleMaximizeAndMinimize}>
            <img src={maximizeIcon} width={10} alt="Maximize button" />
          </button>
        </li>
        <li>
          <button
            className="button"
            id="close"
            onClick={() => remote.app.quit()}
          >
            X
          </button>
        </li>
      </ul>
    </WindowMenuWrapper>
  );
});

export default WindowMenu;
