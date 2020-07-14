import styled from 'styled-components';

export const TimerWrapper = styled.div`
    display: flex;
	flex: 0 0 260px;
	height: 140px;
	justify-content: center;
	align-items: center;
	padding: 20px;
	overflow: hidden;
	position: relative;

	&:hover {
		background-color: rgb(30,30,30);
	}

	p {
		text-align: center;
		font-family: "Roboto";
		font-weight: bolder;
		color: white;
		background-color: inherit;
		font-size: 2.4em;
	}
`

export const ButtonsWrapper = styled.ul`
	display: flex;
	flex: 1 1 0;
	width: 100%;
    align-items: center;
	font-size: 1.6em;
	
	svg:hover {
		background-color: rgba(50,50,50,5);
	}

	.buttonWrapper {
		display: flex;
		flex-direction: column;
		flex: 1 1 0;
		align-items: center;
	}

	.refreshButton {
		position: relative;
		top:0;
		padding: 20px;
	}

	.playButton {
		color: white;
		border-radius: 100%;
		padding: 20px;
		border: 1px solid gray;
	}

	.resizeButton {
		position: relative;
		top:0;
		padding: 20px;
	}
`