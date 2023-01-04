import React from "react";

const handleButton = () => {
  console.log("clicked");
};

const debounce = <T,>(fn: (a: T) => void, delay: number) => {
  let id = 0;
  let counter = 0;
  return (b: T) => {
    if (id !== 0) clearTimeout(id);
    if (counter === 0) {
      fn(b);
      counter++;
      return;
    }
    id = setTimeout(() => {
      fn(b);
    }, delay);
  };
};

const debounceHandleButton = debounce(handleButton, 2000);

const handleFilter = (e: React.FormEvent<HTMLInputElement>) => {
  console.log(e);
};

const debounceFilter = debounce(handleFilter, 2000);

const App = () => {
  return (
    <div>
      <button onClick={debounceHandleButton}>Click me</button>
      <input type="text" onInput={debounceFilter} />
    </div>
  );
};

export default App;
