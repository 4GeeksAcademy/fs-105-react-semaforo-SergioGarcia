import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	const [ color, setColor ] = useState("red");
	const [showPurple, setShowPurple] = useState(false);

	return (
		<div className="text-center">
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

				{showPurple && (
				<div
					onClick={() => setColor("purple")}
					className={"purple" + (color === "purple" ? " light" : "")}></div>
				)};
				
			</div>
				<button
					type="button"
					onClick={() => {
						if (color === "red") setColor("yellow");
						else if (color === "yellow") setColor("green");
						else if (color === "green") {
							if (showPurple) setColor("purple");
							else setColor("red")}
						else setColor("red");
					}}>Light
				</button>
				<button 
					type="button"
					onClick={() => {
						setShowPurple(true);
						setColor("purple");
					}}>Purple
				</button>
		</div>
	);
};

export default Home;