import React, { useState, useEffect, useCallback } from "react";
import List from "./components/List";

// TODO: 콘솔창을 확인해보고 Add Item 버튼 클릭 시
//       useCallback 사용해서 useEffect 안의 콘솔로그가 찍히지 않도록 해보세요.

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, input]);
  }, [input]);

  useEffect(() => {
    console.log("Add Item 버튼 클릭 시에는 로그가 찍히지 않아야 합니다!");
  }, [addItem]);

  return (
    <div>
      <h1>Item List</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <List items={items} />
    </div>
  );
};

export default App;
