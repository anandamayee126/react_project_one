import ExpenseItem from "./components/ExpenseItem";
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
        {
          expenses.map((exp,ind)=>{
            <ExpenseItem
            key={exp.id}
            date={exp.date}
            location={exp.location}
            title={exp.title}
            price={exp.price}
          ></ExpenseItem>
          })
          
        }
        
      </div>
    );
}

export default App;
