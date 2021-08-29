import { useCounter } from "./counter";
import { renderHook } from '@testing-library/react-hooks'
import { act } from "@testing-library/react";


describe('UseCounter', () => {
  test('should be a function', () => {
    expect(typeof useCounter).toBe("function")
  })
  
  test('should render the initial number correctly', () => {
    const {result} = renderHook(()=> useCounter())
    expect(result.current.count).toBe(0)
  })

  test('should increment the count when click increment correctly', () => {
    const {result} = renderHook(()=> useCounter())

    act(()=> result.current.increment())

    expect(result.current.count).toBe(1)
  })

  test('should decrement the count when click decrement correctly', () => {
    const {result} = renderHook(()=> useCounter())

    act(()=> result.current.decrement())

    expect(result.current.count).toBe(-1)
  })

   test('should reset the count when click reset correctly', () => {
    const {result} = renderHook(()=> useCounter())

    act(()=> result.current.increment())

    expect(result.current.count).toBe(1)


    act(()=> result.current.increment())

    expect(result.current.count).toBe(2)


    act(()=> result.current.increment())

    expect(result.current.count).toBe(3)
    

    act(()=> result.current.reset())

    expect(result.current.count).toBe(0)
  })
  
});