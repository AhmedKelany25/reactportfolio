
const CounterActions = props => {
    return <div>
        <button className="btn btn-success m-3" onClick={props.onIncrease}> + </button>
        <button className="btn btn-danger m-3" onClick={props.ondecrease}> - </button>

    </div>
  };
  
  export default CounterActions;