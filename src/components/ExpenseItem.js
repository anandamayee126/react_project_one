import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate.js';
import Card from "./Card.js";
function ExpenseItem(props) {
  function eventhandlerfunc(e){
    console.log("Button Clicked");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__location"><h2 className="expense-item h2">{props.location}</h2></div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick={eventhandlerfunc}>Button clicked</button>
    </Card>
  );
}

export default ExpenseItem;