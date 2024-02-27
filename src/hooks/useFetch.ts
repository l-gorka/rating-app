import { useState, useEffect } from 'react';
import client from 'src/api';

export const useFetch = (query) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setData(null);
      setError(null);
      const res = await client.graphql({
        query
      });
      setData(res.data);
      setLoading(false);
      setError(null);
    }

    getData();
  }, [query]);

  return { isLoading, data, error };
};
