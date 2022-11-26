import "./App.css"
import React, {useState} from "react";
import TLight from "./Light.";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
function App() {
	
	const colors = ["red","yellow","green"];
	const [lit,setlit] = useState ("red");
	return (
		<div className="Home">
			{colors.map((color) =>{
				return <TraficLight color={color} lit={Lit} setlit={setlit} />;
			})}
		</div>

	);
}
export default App;
