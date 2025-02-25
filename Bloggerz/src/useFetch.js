import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data); // set data using setBlogs json server
        setIsLoading(false); // set isLoading to false
      })
      // .catch((error) => {
        // if (error.name === "AbortError") {
        //   console.log("fetch aborted");
        // } else {
        //   setIsLoading(false);
        // }
      //   console.log(error);
      // });
    // Stop the fetch operation
    // return () => abort.abort();
  }, [url]); // This function runs once on page load

  return { blogs, isLoading };
};

export default useFetch;
