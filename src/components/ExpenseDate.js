import "./ExpenseDate.css";

function ExpenseDate(props){
    let months=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]

    let month=months[props.date.getMonth()];
    let year= props.date.getFullYear();
    let date= props.date.getDate();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    )

}

export default ExpenseDate;