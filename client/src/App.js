import React, { Component } from "react";
import Main from "./components/main";
import Quiz from "./components/quiz";
import Result1 from "./components/result1";
import Result2 from "./components/result2";
import Result3 from "./components/result3";
import Result4 from "./components/result4";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/quiz" component={Quiz} />
					<Route exact path="/result1" component={Result1} />
					<Route exact path="/result2" component={Result2} />
					<Route exact path="/result3" component={Result3} />
					<Route exact path="/result4" component={Result4} />
				</Switch>
			</BrowserRouter>
		);
  	}
}

export default App;
