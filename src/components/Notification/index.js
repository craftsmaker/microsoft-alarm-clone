import React from "react";
import {NotificationWrapper} from "./styles";

export default React.memo( () => {
	return(
		<NotificationWrapper>
			<p>
				The notifications will only show up if the computer is active.
				<a href="https://youtube.com">More info</a>
			</p>
		</NotificationWrapper>
	)
})