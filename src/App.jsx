
import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state >0 ? state -1 :0;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">

      <h1 className="text-3xl font-semibold text-gray-900 mb-3">
        Counter App
      </h1>

      <p className="text-sm text-gray-400 mb-10">
        Practice with useReducer
      </p>

      <h2 className="text-8xl font-bold text-gray-900 mb-10 tabular-nums">
        {count}
      </h2>

      <div className="flex items-center gap-3">

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-2xl transition active:scale-95"
        >
          −
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-5 h-12 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-medium transition active:scale-95"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="w-12 h-12 rounded-lg bg-gray-900 hover:bg-gray-700 text-white text-2xl transition active:scale-95"
        >
          +
        </button>

      </div>

    </div>
  );
};

export default App;
