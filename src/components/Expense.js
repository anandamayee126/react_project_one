import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./Card";

function Expense(props){
    return(
       <Card className="expenses">
        {props.expenses.map((exp,ind)=>{
            <ExpenseItem
                key={exp.id}
                date={exp.date}
                location={exp.location}
                title={exp.title}
                price={exp.price}
            ></ExpenseItem>
        })}
        </Card>
    )
}

export default Expense;