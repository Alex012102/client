import { useEffect, useState } from "react";
import supabase from "../services/supabaseClient.js";

const useFetch = (tableName) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    if (!tableName) {
      setFetchError("Table name is required");
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabase.from(tableName).select();

      if (error) {
        setFetchError(`Could not fetch data from ${tableName}`);
        setData(null);
        console.error("Fetch Error:", error);
      } else {
        setData(data);
        setFetchError(null);
      }
    };

    fetchData();
  }, [tableName]);

  return { data, fetchError };
};

export default useFetch;
