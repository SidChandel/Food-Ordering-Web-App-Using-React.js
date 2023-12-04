import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setOnline] = useState();
  
  useEffect(() => {
    const handelOnline = () => {
        setOnline(true);
      };
      const handelOffline = () => {
        setOnline(false);
      };
    window.addEventListener("online", handelOnline);
    window.addEventListener("offline", handelOffline);

    return () => {
      window.removeEventListener("online", handelOnline);
      window.removeEventListener("offline", handelOffline);
    };
  },[] );

  return isOnline;
};
export default useOnline;
