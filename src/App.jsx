import { useEffect, useState } from "react";
import MyComponent from "./MyComponent/MyComponent";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("App component is mounted");
  }, []);

  useEffect(() => {
    console.log("Component is updated");
  }, [data]);

  return (
    <div>
      <MyComponent data={data} />
      <button onClick={() => setData(data + "hi")} >Change</button>
    </div>
  );
}

export default App;
