const COUNT = 'COUNT';
const MINUS = 'MINUS';
const RESET = 'RESET';

const currentState = {
  count: 0,
};

const reducer = (state = currentState, action) => {
  switch (action.type) {
    case COUNT:
      return {
        count: state.count + 1,
      };
    case MINUS:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

var store = Redux.createStore(reducer, currentState);

store.subscribe(() => {
  console.log('In Render');
  console.log(store.getState());
  var currentState = store.getState();
  document.getElementById('times').innerHTML = currentState.count.toString();
});

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'COUNT' });
});

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch({ type: 'MINUS' });
});

document.getElementById('reset').addEventListener('click', function () {
  store.dispatch({ type: 'RESET' });
});
