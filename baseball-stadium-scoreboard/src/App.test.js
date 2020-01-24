import React from 'react';
import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";



import App from './App';

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const wrapper = rtl.render(
    <p>Home</p>
  );
});


// test('renders learn react link', () => {
//   const getByText = render(<App />);
//   console.log(getByText);
//   // const linkElement = getByText(/home/i);
//   // expect(linkElement).toBeInTheDocument();

// });

describe("testing", ()=>{
  const first = 1;
  const second = 3;

  actual = 1;
  const actual = addHit()

  expect(strikes).toBe(actual)
})