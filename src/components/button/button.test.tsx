import { fireEvent, render } from "@testing-library/react";
import { CustomButton } from "./";
import React from "react"
import faker from 'faker'

describe('Button', () => {
  const mockedCalback = jest.fn()
  const mockedLabel = faker.datatype.string(5)

  test('should render a button correctly', () => {
    const { getByTestId, getByRole } = render(<CustomButton  callback={mockedCalback} label={mockedLabel} />)

    
    expect(getByRole("button")).toBeInTheDocument()
    expect(getByTestId("custom-button")).toBeInTheDocument()
  })

  test('should pass props label and color to the button correctly', () => {

    const { getByTestId } = render(<CustomButton callback={mockedCalback} label={mockedLabel} color="red"/>)

    const button = getByTestId("custom-button")
    
    expect(button.textContent).toBe(mockedLabel)
    expect(button).toHaveStyle({"background-color": 'red'})
  })


  test('should pass props callback and should call correctly',async  () => {

    const { getByTestId } = render(<CustomButton callback={mockedCalback} label={mockedLabel} color="red"/>)

    const button = getByTestId("custom-button")
    
    await fireEvent.click(button)

    expect(mockedCalback).toBeCalled()   
  })
  
});