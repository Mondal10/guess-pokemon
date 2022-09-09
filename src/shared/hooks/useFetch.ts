import { useEffect, useState } from "react";

interface IUseFetch<T> {
  loading: boolean;
  response: T | null;
  error: unknown | null;
  abort: void;
}

export function useFetch<T>(url: string): IUseFetch<T> {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [abort, setAbort] = useState(() => {});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const abortController = new AbortController();
        const signal = abortController.signal;
        setAbort(() => abortController.abort);

        const resJson = await fetch(url, { signal }).then((res) => res.json());
        setResponse(resJson);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, response, error, abort };
}
