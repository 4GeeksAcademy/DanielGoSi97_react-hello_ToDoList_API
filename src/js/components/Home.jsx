import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {

	const [list, setList] = useState([]);
	const [inputElement, setInputElement] = useState("");

	const addElementList = async() => {
		if (inputElement != "") {
			const response = await fetch("https://playground.4geeks.com/todo/todos/Batman", {
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					"label": inputElement,
					"is_done": false
					})
			});
			console.log(response);
			setInputElement("");
			obtenerTareas();
		}
	}
	function oprimioTecla(e) {
		console.log(e.key)
		if (e.key == "Enter") {
			console.log(e.key);
			addElementList();
		}
	}
	/*const eliminarTarea = (index) => {
		const newList = list.filter((_, i) => i != index);
		setList(newList)
	}*/
	const eliminarTarea  = async(id)=>{
		try{
			const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
				method: "DELETE"
			});
			obtenerTareas();
		} catch(error){
			console.log(error)
		}
		obtenerTareas()
	}
	/*const addTareas = async() => {
		try{
			const response = await fetch("https://playground.4geeks.com/todo/todos/Batman", {
				method: "POST",
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					"label": inputElement,
					"is_done": false
					})
			});
			console.log(response)
		} catch(error){
			console.log(error)
		}
	}*/
	const obtenerTareas = async() =>{
		try {
		const response = await fetch("https://playground.4geeks.com/todo/users/Batman");
		console.log(response)
		const data = await response.json()
		console.log(data.todos)
		setList(data.todos)
		} catch (error){
		console.log(error)
		}
	}
useEffect(()=>{
obtenerTareas()
}, [])
	/*const getTareas = () => {
		fetch('https://playground.4geeks.com/todo/users/Batman')
		.then((response) => response.json())
		.then((data) => {setList(data.todos)});
	}
	useEffect(() => {
		getTareas();
	}, []);*/

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
							{/* element era original */}
							<p>{element.label}
							<button className="btn btn-outline-danger float-end" onClick={() => eliminarTarea(element.id)}>x</button>
							</p>
						</div>)}
				</div>
				<p className="card-footer text-muted p-1 m-0 text-start">Tareas pendientes: {list.length}</p>
			</div>
		</div>
	);
};

export default Home;