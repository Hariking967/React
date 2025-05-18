import React, { useState } from 'react'
import styles from './todolist.module.css'

function Todolist(prop) {
    const [inputTask, setInputTask] = useState("");
    const [tasks, setTasks] = useState(["Clean the room", "Walk the dog"]);

    const tasksList = tasks.map((task, index) =>
        <li key={index}>
            <div className={styles.task}>
                <span>{task}</span>
                <button className={styles.delete} onClick={() => deleteTask(index)}>Delete</button>
                <button className={styles.moveup} onClick={() => moveUp(index)}>☝️</button>
                <button className={styles.movedown} onClick={() => moveDown(index)}>👇</button>
            </div>
        </li>
    );

    function getNewTask(e) {
        setInputTask(e.target.value);
    }

    function addTask(event) {
        if (inputTask == ""){return}
        setTasks(t => [...t, inputTask]);
        document.getElementById("enterTask").value = "";
        setInputTask("");
    }

    function deleteTask(index) {
        setTasks(tasks => tasks.filter((_, i) => i !== index));
    }

    function moveUp(i) {
        setTasks(tasks => {
            if (i === 0) { return tasks; }
            const newTasks = [...tasks];
            [newTasks[i], newTasks[i - 1]] = [newTasks[i - 1], newTasks[i]];
            return newTasks;
        });
    }

    function moveDown(i) {
        setTasks(tasks => {
            if (i === tasks.length - 1) { return tasks; }
            const newTasks = [...tasks];
            [newTasks[i], newTasks[i + 1]] = [newTasks[i + 1], newTasks[i]];
            return newTasks;
        });
    }

    return (
        <>
            <div className={styles['input-div']}>
                <input id='enterTask' type="text" placeholder="Enter a task..." onChange={getNewTask}></input>
                <button className={styles.add} onClick={addTask}>Add</button>
            </div>
            <div className={styles['output-div']}>
                <ol>
                    {tasksList}
                </ol>
            </div>
        </>
    );
}

export default Todolist;