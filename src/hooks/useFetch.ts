import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = ({ url, isReq }: { url: string, isReq: boolean }) => {
  const [isError, setIsError] = useState(false);
  const [errorBody, setErrorBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<object>({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setData(response);
      } catch (error: unknown) {
        setIsError(true);
        setErrorBody(error as string);
      }

      setIsLoading(false);
    };

    if (isReq && url) {
      fetchData()
    }
  }, [url, isReq]);
  return { isError, isLoading, data, errorBody };
};


