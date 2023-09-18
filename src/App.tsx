import "./App.css";
import { useState } from "react";
import { ShowData } from "./components";
import { useFetch } from "./hooks";
export function App() {
  const [input, setInput] = useState("");
  const {
    isError,
    isLoading,
    errorBody,
    data,
  } = useFetch({
    url: input,
  });
  const keys = Object.keys(data);
  console.log(keys);
  return (
    <>
      <header className="w-screen h-26 flex justify-center items-center">
        <nav className="flex-col items-center justify-center flex">
          <h1 className="text-4xl my-3 font-bold font-mono">Hello Axios!</h1>
          <p>{isError ? "something went wrong" : null}</p>
          <form>
            <input
              className="p-2 rounded-md w-60"
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </form>
        </nav>
      </header>
      {data?.data ? (
        <div className="w-11/12 flex flex-col items-center mt-3 rounded">
          {keys?.map((item, key) => {
            return <ShowData data={data[item]} key={key} items={item}/>;
          })}
        </div>
      ) : null}
      {isLoading && <p>Loading...</p>}
      {isError ? <ShowData data={errorBody} items="Error"/>: null}
    </>
  );
}
