import { useEffect, useState } from "react";
import api from '../service/api.js';

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(endpoint);
        setData(res.data);
      } catch (err) {
        setError("Erro ao carregar dados");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
