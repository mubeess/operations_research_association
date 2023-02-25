import axios from "axios";
import { useEffect, useState } from "react";
function useFetch(url: string) {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  async function run() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      const data = await response.data;
      if (response.status == 200) {
        setResult({ success: true, data: data });
      }

      setLoading(false);
    } catch (err) {
      setResult({ success: false });
      setLoading(false);
    }
  }

  useEffect(() => {
    run();
  }, []);

  return { result, loading };
}

export default useFetch;
