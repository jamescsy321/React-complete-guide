import "./Card.css";
function Card(props) {
  const classes = 'card ' + props.className; //card 後面要空格
  return <div className={classes}>{props.children}</div>;
}
export default Card;
