//hooks share logic not state. Each component gets it's own state. So if this counter is used in multiple components, each will have their own state. If you want to share state, you need to use a context. Thus you can have a conter that uses this component that counts UP and another that also uses this component that counts DOWN. This is a good example of how to share logic, but not state.
import { useEffect, useState } from 'react'

function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter