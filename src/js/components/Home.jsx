import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectorColor] = useState("red");
	return (
		<div className=" container d-flex justify-content-center aling-item-center vh-100">

			<div className="traffic-light">
				<div
					onClick={() => setSelectorColor("red")}
					className={
						"light red" + (selectColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectorColor("yellow")}
					className={
						"light yellow" + (selectColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectorColor("green")}
					className=
					{
						"light green" + (selectColor === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;