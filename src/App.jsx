import { useState } from 'react'
import Listitem from "./components/Listitem"

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("")
  const [edit, setEdit] = useState(false)
  const [current, setCurrent] = useState(null)



  // add items into list

  const add = () => {
    if (!name.trim()) {
      return;
    }
    if (name.length >= 3) {

      const newarr = [...items, name];
      setItems(newarr);
      setName("")
    } else {
      alert("enter valid count")
    }


  }

  // delete items from list

  const delet = (index) => {
    if (confirm("Delete this item?")) {
      const newitems = items.filter((el, i) => i != index);
      setItems(newitems)
      setName("")
      setEdit(false)
      setCurrent(null)
    }

  }


  // editing itemss

  const edititem = (index) => {
    setName(items[index])
    setEdit(true)
    setCurrent(index)
  }

  // update itemss
  const update = () => {
    if (name == "" || name.length < 3) {
      console.log("enter value")
    } else {
      const updated = items.map((el, i) => (i == current) ? name : el)
      setItems(updated)
      setName("")
      setEdit(false)
      setCurrent(null)
    }


  }

  // add item on enter

  const addonenter = (e) => {
    if (e.key == "Enter") {
      add()
      if (edit == true) {
        update()
      } else {
        add()
      }

      //   if (e.key=="Enter" && edit==true){
      //   update()

      // }
    }



  }



  return (
    <div className='mt-5'>

      <h1 className='text-center bg-info'>To-Do-List</h1>
      <div className='d-flex gap-2 mb-2'>
        <input type="text" className="form-control" onKeyUp={addonenter} onChange={(e) => { setName(e.target.value) }} value={name} placeholder="new items" />
        <button className='btn btn-warning' onClick={(edit == true) ? update : add}>
          {
            (edit == true) ? "Update" : "Add"
          }
        </button>

      </div>
      <table className="table table-bordered table-primary" style={{ width: "500px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">items</th>
            <th scope="col">action</th>

          </tr>
        </thead>
        <tbody>
          {
            items.map((item, i) => {
              return (
                <Listitem ondelete={delet} items={item} index={i} edititem={edititem} key={i} />
              )
            })
          }


        </tbody>
      </table>
    </div>
  )
}

export default App
