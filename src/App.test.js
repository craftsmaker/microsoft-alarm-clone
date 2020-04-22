import React from 'react';
import {ReactDOM, unmountComponentAtNode } from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";

let div = document.createElement("div");

beforeEach(() => {
	document.body.appendChild(div);
})

afterEach(() => {
	ReactDOM.unmountComponentAtNode(div);
})

describe("Everything", () => {
	it("Renders without crashing", () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	

	it("Teste 1", () => {
		act(() => {
			ReactDOM.render(<App />, div);
		})

		expect(div.textContent).toBe("hello");
	})

	
})
