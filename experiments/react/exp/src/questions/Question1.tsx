import React, {useEffect} from 'react';

// In what sequence will the console.logs be executed?

const Child = () => {
    console.log("child")
    return null
  }
  
export const Parent = () => {
  useEffect(() => console.log("effect"), [])

  console.log("parent")

  return <Child />
  
}

export const Question1 = () => {
  return <Parent />
}