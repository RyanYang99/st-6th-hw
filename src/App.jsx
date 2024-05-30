import React, { useState, useEffect } from "react";

// TODO: useFetch 라는 커스텀훅을 사용해서 리팩터링 해보세요

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log("response:", response);
        if (!response.ok) {
          throw new Error("Network 오류");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Data Fetching Example</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default App;
