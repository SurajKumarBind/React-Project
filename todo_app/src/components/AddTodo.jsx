function AddTodo() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg_button2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
