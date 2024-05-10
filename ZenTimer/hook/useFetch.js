import { useState } from "react";
import axios from "axios";

const useFetch = (route, onReceived) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const performFetch = async (options, newUrl) => {
    route = newUrl || route;
    setError(null);
    setIsLoading(true);

    const baseURL = "https://zen-timer-app-server-7f9db58def4c.herokuapp.com";
    const url = `${baseURL}${route}`;

    const defaultOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await axios({ ...defaultOptions, ...options, url });

      if (response.status >= 200 && response.status < 300) {
        const responseData = response.data;
        if (responseData.success === true) {
          onReceived(responseData);
        } else {
          setError(responseData.msg || "Unknown error occurred");
        }
      } else {
        setError(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      setError(error.message || "An error occurred while fetching data");
    }

    setIsLoading(false);
  };

  return { isLoading, error, performFetch };
};

export default useFetch;
