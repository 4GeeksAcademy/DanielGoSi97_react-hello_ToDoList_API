import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

//create your first component
const Home = () => {

	const [list, setList] = useState(["Make the bed", "Wash my hands", "Eat", "Walk the dog"]);
	const [inputElement, setInputElement] = useState("");

	const addElementList = () => {
		if (inputElement != "") {
			setList([...list, inputElement]);
			setInputElement("");
		}
	}
	function oprimioTecla(e) {
		console.log(e.key)
		if (e.key == "Enter") {
			console.log(e.key);
			addElementList();
		}
	}
	const eliminarTarea = (index) => {
		const newList = list.filter((_, i) => i != index);
		setList(newList)
	}
	return (
		<div className="text-center container mt-5 card w-50 p-0">
			<h1 className="card-header">To Do List</h1>
			
			<div className="card-body p-0">
				<div className="d-flex justify-content-center">
					<input type="text"
						onKeyDown={oprimioTecla}
						placeholder="What needs to be done?"
						value={inputElement}
						onChange={(e) => setInputElement(e.target.value)}
						className="form-control mb-3" />
				</div>
				<div className="justify-content-center list-group-item">
					{list.map((element, index) =>
						<div key={index}>
							<p>{element}
							<button className="btn btn-outline-danger float-end" onClick={() => eliminarTarea(index)}>x</button>
							</p>
						</div>)}
				</div>
				<p className="card-footer text-muted p-1 m-0 text-start">Tareas pendientes: {list.length}</p>
			</div>
		</div>
	);
};

export default Home;