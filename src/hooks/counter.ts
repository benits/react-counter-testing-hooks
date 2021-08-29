import { useState } from "react"

type useCounterReturn ={
  count: number;
  increment: ()=> void;
  decrement: ()=> void;
  reset: ()=> void;
}

export const useCounter = (): useCounterReturn => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return {
    count,
    increment,
    decrement,
    reset
  }
} 