import { useState, useLayoutEffect, useEffect } from "react";
import { useFetch } from "../hooks";
type FetchedDataType = {
  data: object;
};
export const Form = ({
  setFetchedData,
}: {
  setFetchedData: ({ data }: FetchedDataType) => void;
}) => {
  const [input, setInput] = useState("");
  const [shouldRequested, setShouldRequested] = useState<boolean>(false);
  const { isError, isLoading, data, errorBody } = useFetch({
    url: input,
    isReq: shouldRequested,
  });
  const fetch = () => {
    if (input) {
      setShouldRequested(true);
      setFetchedData({ data });
    }
  };
  useEffect(() => {
    fetch();
    setFetchedData({ data });
    console.log(data);
  }, []);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {isLoading ? <p>Loading...</p> : null}
      <input
        className="py-2 px-1 rounded"
        type="text"
        placeholder="A link to fetch data"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="ml-5 rounded px-4 py-2 bg-slate-700 text-white"
        onClick={fetch}
      >
        GET
      </button>
    </form>
  );
};
