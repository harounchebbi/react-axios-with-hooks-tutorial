import { useEffect, useState } from "react";

import axios from "../axios";

const FetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {
    data,
    loading
  };
};

export default FetchData;
