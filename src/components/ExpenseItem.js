import "./ExpenseItem.css";

function ExpenseItem(props) {

  return (
    <div>
      <div className="expense-item">{props.date.toISOString()}</div>
       <div className="expense-item__location"><h2 className="expense-item h2">{props.location}</h2></div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;