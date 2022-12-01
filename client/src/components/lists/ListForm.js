import { useState, useEffect } from 'react';

const ListForm = ({ addList, id, list_name, desc, updateList, setEdit }) => {
  const [list, setList] = useState({ list_name: '', desc: '' })

  useEffect(() => {
    if (id) {
      setList({ list_name, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateList(id, list)
      setEdit(false)
    } else {
      addList(list)
    }
    setList({ list_name: '', desc: '' })
  }

  return (
    <>
      <h1>{id ? "Update" : "Create"} List</h1>
      <form onSubmit={handleSubmit}>
        <label>List Name</label>
        <input 
          name='list_name' 
          value={list.list_name} 
          onChange={(e) => setList({ ...list, list_name: e.target.value })} 
          required
        />
        <textarea
          name='desc' 
          value={list.desc} 
          onChange={(e) => setList({ ...list, desc: e.target.value })} 
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm;