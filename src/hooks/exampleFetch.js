import { useEffect, useState } from "react";
import supabase from "../services/supabaseClient";

const useFetch = () => {
  const [fetchError, setFetchError] = useState([]);

  const [account, setAccount] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const { data, error } = await supabase.from("accounts").select();

      if (error) {
        setFetchError("Could not fetch account information");
        setAccount(null);
        console.log(error);
      }
      if (data) {
        setAccount(data);
        setFetchError(null);
      }
    };

    fetchAccount();

  }, []);
};
