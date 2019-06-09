import React, { Component } from "react";
import Main from "./components/main";
import Quiz from "./components/quiz"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/quiz" component={Quiz} />
				</Switch>
			</BrowserRouter>
		);
  	}
}

export default App;
