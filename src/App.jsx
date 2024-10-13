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