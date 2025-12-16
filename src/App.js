import './App.css';
import Subscription from './components/subscription.js';

function App() {

  let subscriptions = [
    {
      id: "1",
      date: new Date(2025, 11, 7),   // Dec = 11
      title: "Monthly Subscription",
      amount: 125.70
    },
    {
      id: "2",
      date: new Date(2023, 10, 2),   // Nov = 10
      title: "Quarterly Subscription",
      amount: 325.70
    },
    {
      id: "3",
      date: new Date(2021, 0, 8),    // Jan = 0
      title: "Yearly Subscription",
      amount: 525.70
    }
  ];

  return (
    <div>
      <Subscription
        passeddate={subscriptions[0].date}
        passedTitle={subscriptions[0].title}
        passedAmount={subscriptions[0].amount}
      />

      <Subscription
        passeddate={subscriptions[1].date}
        passedTitle={subscriptions[1].title}
        passedAmount={subscriptions[1].amount}
      />

      <Subscription
        passeddate={subscriptions[2].date}
        passedTitle={subscriptions[2].title}
        passedAmount={subscriptions[2].amount}
      />
    </div>
  );
}

export default App;
