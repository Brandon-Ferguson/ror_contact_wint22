import { useState } from 'react';

const ListForm = ({ addList }) => {
  const [list, setList] = useState({ list_name: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addList(list)
    setList({ list_name: '', desc: '' })
  }

  return (
    <>
      <h1>Create List</h1>
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