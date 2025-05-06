import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	const [ color, setColor ] = useState("red");
	

	return (
		<div>
			<div className="semaforo">
				<div 
					onClick={() => setColor("red")}
					className={"red" + (color === "red" ? " light" : "")}></div>

				<div 
					onClick={() => setColor("yellow")}
					className={"yellow" + (color === "yellow" ? " light" : "")}></div>
					
				<div
					onClick={() => setColor("green")}
					className={"green" + (color === "green" ? " light" : "")}></div>

				<div
					onClick={() => setColor("purple")}
					className={"purple" + (color === "purple" ? " light" : "")}></div>
			</div>
				<button
					type="button"
					onClick={() => {
						if (color === "red") setColor("yellow");
						else if (color === "yellow") setColor("green");
						else setColor("red");
					}}>Light
				</button>
				<button 
					type="button" onClick={() => setColor("purple")}>
					Purple
				</button>
		</div>
	);
};

export default Home;