import React from "react";
import DataComponent from "./components/DataComponent/DataComponent";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className='app'>
			<DataComponent />
			<ErrorComponent />
			<LoadingComponent />
		</div>
	);
};

export default App;
