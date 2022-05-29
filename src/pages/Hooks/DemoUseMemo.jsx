import { useState } from "react";

function DemoUseMemo() {
  const [str, setStr] = useState('abcd');

  const reversedStr = (str) => {
    return str.split('').reverse().join('');
  }

  return (
    <>
      <div>{reversedStr(str)}</div>
      <button onClick={() => setStr('zxc')}>str</button>  
    </>
  )
}

export default DemoUseMemo;
