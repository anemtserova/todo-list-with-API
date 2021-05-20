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
		<div className="container-fluid mt-5 p-5 w-50 shadow rounded">
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
				<div className="col-12 my-3">
					{tasks.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<li className="d-flex justify-content-between py-3 border-bottom">
									{item}
									<span>
										<i
											onClick={() => deleteTasks(index)}
											className="far fa-trash-alt text-danger"></i>
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
