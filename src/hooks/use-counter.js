//hooks share logic not state. hooks manipulate the outome of the final state rendered by the component that calls the hook. Each component gets it's own state. So if this counter is used in multiple components, each will have their own state. If you want to share state, you need to use a context. Thus when a hook like this one is employed you can have a conter that uses this component that counts UP and another that also uses this component that counts DOWN. This is a good example of how to share logic, but not state. Notice this hook is a "function" that is exported and NOT a child or parent component. This is a custom hook. It is a function that uses logic but not state. 
import { useEffect, useState } from 'react'

function useCounter(y) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + y );
    }, 1000);

    return () => clearInterval(interval);
  }, [y]);

  return counter;
};

export default useCounter