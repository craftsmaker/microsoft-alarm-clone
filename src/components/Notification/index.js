import React from "react";
import "./styles.css";

export default React.memo( () => {
	return(
		<div className="notification">
			<p>
				The notifications will only show up if the computer is active.
				<a href="https://youtube.com">More info</a>
			</p>
		</div>
	)
})