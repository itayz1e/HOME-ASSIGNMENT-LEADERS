import { useEffect, useState } from "react";
import axios from "axios";
import { ApiResponse, Influencer } from "../interface";

const useSearchInfluencers = (query: string) => {
  const [results, setResults] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInfluencers = async () => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get<ApiResponse>(
          `http://localhost:3000/influencer/users?q=${query}`
        );
        setResults(response.data.data);
      } catch (error) {
        console.error("Error fetching influencers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, [query]);

  return { results, loading };
};

export default useSearchInfluencers;
