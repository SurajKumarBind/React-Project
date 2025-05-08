function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2003";
  return (
    <div className="container">
      <div className="row kg_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger kg_button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
