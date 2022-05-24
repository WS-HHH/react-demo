import React, { useState } from "react"

export default function DemoUseState() {
  const [count, setCount] = useState(0);

  const visible = useState(false);
  console.log('visible', visible);
  console.log('useState', useState());
  
  const [num, updateNum] = useState(0);
  // window.updateNum = updateNum;

  // TODO: 1秒内快速点击，视图上的num为多少？（useState如何保存状态？如何更新状态？）
  function increment() {
    console.log('click');
    setTimeout(() => {
      updateNum(num+1)
    }, 1000)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>click me</button>
      {/* <p>{num}</p>
      <p>{window.updateNum(1)}</p> */}
      <p onClick={increment}>num: {num}</p>
    </div>
  )
}
