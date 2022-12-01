const ListShow = ({ id, list_name, desc }) => {

  return (
    <>
      <h1>{list_name}</h1>
      <p>{desc}</p>
      <button>Edit</button>
      <button>Delete</button>
      <button>Contacts</button>
    </>
  )
}

export default ListShow