Todo List Application
A simple Todo List built with React using the useReducer hook. This project demonstrates how to manage state effectively with useReducer for adding, updating, and removing tasks.

Features
Add new tasks
Mark tasks as complete/incomplete
Delete tasks
Clean code with state management using useReducer
Demo


Installation

Clone the repository:
git clone https://github.com/saqlainnaqshi/ToDoList_useReducer.git
cd ToDoList_useReducer

Install dependencies:
npm install

Start the development server:
npm run dev

Folder Structure

todolist-usereducer/
├── public/
│   ├── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   └── App.css
├── eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md

Code Overview
useReducer Setup
In this project, the useReducer hook manages the state of the todo list.

state: Represents the list of todos.
dispatch: Updates the state based on actions (e.g., add, delete, toggle).
Reducer (app.jsx)

import { useReducer, useState } from "react"
import "./App.css"
function App() {
  const initialState = [
    {
      id: 1,
      title: "reading",
      isComplete: true
    },

    {
      id: 2,
      title: "gym",
      isComplete: false
    },

    {
      id: 3,
      title: "Shopping",
      isComplete: false
    },
  ]
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "SAVE_DATA":
        let newItem = {
          id: prevState.length + 1,
          title: action.payload,
          isComplete: false
        }
        return [...prevState, newItem]

      case "TASK_DONE":
        let updateTasks = prevState.map((item) => {
          if (item.id === action.payload) {
            console.log(item.title)
            return {
              ...item,
              isComplete: !item.isComplete
            };
          }
          return item;
        })
        return updateTasks

      case "DELETE_ITEM":
        let deleted = prevState.filter((item) => item.id !== action.payload )
        console.log(deleted)
        return deleted
        
      default: return prevState
    }
  }

  let [toDolist, dispatch] = useReducer(reducer, initialState)
  let [inputVal, SetInputVal] = useState("")

  return (
    <>
      <input type="text" placeholder="Enter item" onChange={(event) => { SetInputVal(event.target.value) }} />
      <button onClick={() => {

        dispatch({
          type: "SAVE_DATA",
          payload: inputVal
        })

      }}>To Do</button>

      <div className="box">

        <div className="card">
          <h2>To Do</h2>
          <ul>
            {toDolist.map((item) => {

              if (item.isComplete == false) {
                return <li key={item.id} style={{ backgroundColor: "tomato" }} onClick={() => {
                  dispatch({
                    type: "TASK_DONE",
                    payload: item.id
                  })

                }}>{item.title}</li> 
                
              }
            })}
          </ul >
        </div>
        <div className="card">
          <h2>Done</h2>
          <ul>
            {toDolist.map((item) => {

              if (item.isComplete == true) {
                return <><li key={item.id} style={{ backgroundColor: "pink" }} onClick={(e) => {
                  dispatch({
                    type: "TASK_DONE",
                    payload: item.id
                  })

                }}>{item.title}</li>
                <button onClick={()=>{
                  dispatch({
                    type: "DELETE_ITEM",
                    payload: item.id
                  })
                }}>Delete</button>
                </>
              }
            })}
          </ul >
        </div>
      </div>
    </>
  )
}
export default App


Styling (App.css)

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.card {
  border: 2px solid black;
  padding: 0px 7% 7% 7%;

}
.read-the-docs {
  color: #888;
}
ul{
  list-style: square;
}
button{
  color:white;
  background-color: blueviolet;
  width:100px;
  height: 25px;
  border: 1px solid blueviolet;
  border-radius: 2px;
}
input{
  color:black;
  background-color: aliceblue;
  width:200px;
  height: 25px;
  border: none;
}
.box{
  display: flex;
  flex-flow: column;
  column-gap: 50%;
}

Contributing
Feel free to submit a pull request or open an issue if you find any bugs or have feature requests.

License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback, feel free to reach out:

GitHub: [saqlainnaqshi](https://github.com/saqlainnaqshi)
This README.md covers everything needed for your React todo list project, including setup, usage, and a basic structure overview. You can adjust it according to your project-specific needs and add any additional sections if required.
