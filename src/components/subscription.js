import './subscription.css';

function Subscription(props) {

  const month = props.Date.toLocaleString('default',{month:'long'});
  const day = props.Date.toLocaleString('default',{day:'2-digit'});
  const year = props.Date.getFullYear();
  

  return (
    <div className="subscription">

      <div className="subscription-date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      </div>
      <h2 className="subscription-title">{props.Title}</h2>
      <div className="subscription-amount">{props.Amount}</div>
    </div>
  );
}

export default Subscription;
