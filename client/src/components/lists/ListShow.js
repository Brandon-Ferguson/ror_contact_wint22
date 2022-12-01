import { useState } from 'react';
import ListForm from './ListForm';

const ListShow = ({ id, list_name, desc, updateList, deleteList }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <ListForm 
              id={id}
              list_name={list_name}
              desc={desc}
              updateList={updateList}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h1>{list_name}</h1>
          <p>{desc}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteList(id)}>
            Delete
          </button>
          <button>Contacts</button>
        </>
      }
    </>
  )
}

export default ListShow;