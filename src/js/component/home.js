import React, { useState } from "react";

//create your first component
export function Home() {
	const [tasks, setTasks] = useState([]);
	const [inputTask, setInputTask] = useState("");

	const addTask = input => {
		if (inputTask) {
			setTasks([...tasks, input]);
			setInputTask("");
		} else alert("Write a task to add.");
		fetch("https://assets.breatheco.de/apis/fake/todos/user/antoniya", {
			method: "PUT",
			body: JSON.stringify(input),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};

	const deleteTasks = delTaskIndex => {
		let newTaskList = tasks.filter((value, i) => i != delTaskIndex);
		return setTasks(newTaskList);
	};

	const displayNumberOfTasks = list => {
		let tasksLeft = list.length;
		return tasksLeft;
	};

	return (
		<div className="container-fluid mt-5 p-5 w-50 shadow rounded bg-light">
			<div className="m-auto w-75 pb-4">
				<p className="w-75 m-auto text-center display-4">To-Do List</p>
			</div>
			<div className="input-group m-auto w-75">
				<input
					type="text"
					className="form-control"
					placeholder="Add a New Task"
					aria-label="Add a New Task"
					aria-describedby="button-addon2"
					value={inputTask}
					onChange={e => setInputTask(e.target.value)}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-outline-success"
						type="button"
						id="button-addon2"
						onClick={() => {
							addTask(inputTask);
						}}>
						Add Task
					</button>
				</div>
			</div>
			<div className="row m-auto w-75">
				<div className="col-12 my-3 w-100 p-0">
					{tasks.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<li className="d-flex justify-content-between text-wrap py-3 px-4 border-bottom task">
									{item}
									<span>
										<i
											onClick={() => deleteTasks(index)}
											className="far fa-trash-alt text-danger "></i>
									</span>
								</li>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
}
