import { render } from "@testing-library/react";
import faker from 'faker';
import React from "react";
import { DisplayValue } from "./";

describe('DisplayValue', () => {
  const mockedValueLabel= faker.datatype.number(10)
  test('should render a button correctly', () => {
    const { getByTestId } = render(<DisplayValue  valueLabel={mockedValueLabel} />)

   
    expect(getByTestId("display-value")).toBeInTheDocument()
  })

  test('should pass the value to DisplayValue correctly', () => {
    const { getByTestId } = render(<DisplayValue  valueLabel={mockedValueLabel}/>)

   
    expect(getByTestId("display-value").textContent).toBe(mockedValueLabel.toString())
  })
});