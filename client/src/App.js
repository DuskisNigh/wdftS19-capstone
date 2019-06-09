import React, { Component } from "react";
import Main from "./components/main";
import Quiz from "./components/quiz"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Main />
					<Switch>
						<Route path="/quiz" component={Quiz} />
					</Switch>
				</div>
			</BrowserRouter>
		);
  	}
}

export default App;
