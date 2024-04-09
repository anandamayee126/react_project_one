import "./Card.css";

function Card(props){
    let classes='card'+props.className;
    <div className={classes}>{props.children}</div>
}

export default Card;