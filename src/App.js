// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
function App() {
  let expenses=[
    {id:1,date:new Date(2023,7,12),location:"Bangalore",title:"pen",price:"$1"},
    {id:2,date:new Date(2023,8,12),location:"Bangalore",title:"book",price:"$10"},
    {id:3,date:new Date(2023,9,12),location:"Bangalore",title:"jwellery",price:"$15"},
    {id:4,date:new Date(2023,10,12),locatio:"Bangalore",title:"plant",price:"$20"}
  ]
  return (
      <div>
        <h1>Let's get Started</h1>
        <Expense expenses={expenses}></Expense>
      </div>
    );
}

export default App;
