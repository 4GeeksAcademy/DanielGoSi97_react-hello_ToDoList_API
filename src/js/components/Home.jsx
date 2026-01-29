import React, { useState } from "react";

//create your first component
const Home = () => {

	const [list, setList] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"]);
	const [inputElement, setInputElement] = useState("");

	const addElementList = ()=>{
		if(inputElement != ""){
			setList([...list,inputElement]);
			setInputElement("");
		}
	}

	return (
		<div className="text-center">
			<div>
				<input type="text" placeholder="What needs to be done?" value={inputElement} onChange={(e) => setInputElement(e.target.value)}/>
			</div>
			<div>
				{list.map((element, index) => <div key={index}>{element}</div>)}
			</div>
			<button onClick={addElementList}>Agregar</button>
		</div>
	);
};

export default Home;