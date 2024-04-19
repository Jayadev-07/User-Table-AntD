import axios from "axios";
import { useEffect, useState } from "react";

export type User = {
  id: string;
  name: string;
  age: number;
  address: string;
  role: string;
  description: string;
};
const useDatafetch = () => {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("http://localhost:3000/users");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useDatafetch;
