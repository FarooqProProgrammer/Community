import { useEffect, useRef } from 'react';

const useRandomId = () => {
  const idRef = useRef(null);

  useEffect(() => {
    idRef.current = Math.random().toString(36).substr(2, 9); 
  }, []);

  return idRef.current;
};

export default useRandomId;
