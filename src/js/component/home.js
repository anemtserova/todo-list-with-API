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
		<div className="container-fluid mt-5">
			<div className="m-auto w-75 ">
				<h1 className="w-50 m-auto text-center">To-Do List</h1>
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
						className="btn btn-outline-secondary"
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
				<div className="col-12 my-3">
					{tasks.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<li className="d-flex justify-content-between">
									{item}
									<span>
										<i
											onClick={() => deleteTasks(index)}
											className="far fa-trash-alt"></i>
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
