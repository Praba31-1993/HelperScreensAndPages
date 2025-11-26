import React, { useCallback, useEffect, useState } from "react";

function CheckingUseEffect() {
  const [userData, setUserData] = useState([]);

  // ✅ Memoize the API function with useCallback
  const todosResponse = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      console.log("Fetched JSON:", json);
      setUserData(json);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }, []); 


  useEffect(() => {
    todosResponse();
  }, [todosResponse]); 


  return (
    <div>
      <h3>Todos</h3>
      <button type="button" class="btn btn-primary">Primary</button>
      <ul>
        {userData.slice(0, 5).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CheckingUseEffect;
