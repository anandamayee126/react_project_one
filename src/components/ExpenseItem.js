import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">15 August 2023</div>
       <div className="expense-item__location"><h2 className="expense-item h2">Location</h2>
          <div className="expense-item__location">Delhi</div>
        </div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">Book</h2>
        <div className="expense-item__price">$10</div>
      </div>
    </div>
  );
}

export default ExpenseItem;