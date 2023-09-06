import "./App.css";
import { useState } from "react";
import { Form, ShowData } from "./components";
function App() {
  const [fetchedData, setFetchedData] = useState<object>({});
  return (
    <>
      <header className="w-screen h-26 flex justify-center items-center">
        <nav className="flex-col items-center justify-center flex">
          <h1 className="text-4xl my-3">Hello Axios!</h1>
          <Form setFetchedData={setFetchedData} />
        </nav>
      </header>
      <div className="w-11/12 flex flex-col items-center mt-3 rounded">
        <ShowData/>
      </div>
    </>
  );
}

export default App;
