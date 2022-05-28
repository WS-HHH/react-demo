import React, { useEffect, useState } from 'react'

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);

  // 副作用
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  // 清除副作用
  useEffect(() => {
    // do sth
    // fetch

    // 通过返回以一个函数来清除副作用
    // return function
  })

  // 提升性能
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}