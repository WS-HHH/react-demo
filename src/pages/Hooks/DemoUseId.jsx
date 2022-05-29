import { useId } from "react";


function DemoUseId() {
  const id = useId();

  console.log('id', id);
  return (
    <>
      <label htmlFor={id}>do you like react ?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  )
}

export default DemoUseId;
