import { useEffect, useState } from "react";

export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isLoading, setisLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const abortController = new AbortController();
      const signal = abortController.signal;

      const fetchData = async () => {
         try {
            setisLoading(true);
            let response = await fetch(url, {
               signal: signal,
               // headers: { mode: "no-cors" },
            });
            console.log("llamada");
            if (!response.ok) {
               let error = new Error("Algo salió mal");
               error.status = response.status || "000";
               error.statusText = response.statusText || "algo salió mal";
               throw error;
            }

            let data = await response.json();
            if (!signal.aborted) {
               setData(data);
               setError(null);
            }
         } catch (error) {
            setError(error);
         } finally {
            setisLoading(false);
         }
      };
      fetchData();

      // En caso de algún error
      return () => {
         abortController.abort();
      };
   }, [url]);

   return {
      error,
      data,
      isLoading,
   };
};
