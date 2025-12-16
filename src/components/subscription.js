import './subscription.css';

function Subscription(props) {

  return (
    <div className="subscription">
      <div className="subscription-date">{props.passeddate.toString()}</div>
      <h2 className="subscription-title">{props.passedTitle}</h2>
      <div className="subscription-amount">{props.passedAmount}</div>
    </div>
  );
}

export default Subscription;
