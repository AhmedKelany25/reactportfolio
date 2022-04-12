
const CounterActions = ({onIncrease,ondecrease}) => {
    return <div>
        <button className="btn btn-success m-3" onClick={onIncrease}> + </button>
        <button className="btn btn-danger m-3" onClick={ondecrease}> - </button>

    </div>
  };
  
  export default CounterActions;