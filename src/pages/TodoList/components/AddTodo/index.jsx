import { useState } from 'react';
import Button from '../../../../components/Base/Button/index.jsx'
import Input from '../../../../components/Base/Input/index.jsx'

export default function AddTodo(props) {
  const [value, setValue] = useState('')
  const { onAdd } = props;
  function handleOn() {
    if (!value) {
      alert('请输入')
    }
    onAdd(value)
    setValue('')
  }

  return (
      <>
        <Input className="w-7/12" name={value} value={value} onChange={e => setValue(e.target.value)}/>
        <Button
          className="ml-4"
          type="primary"
          size="large"
          onClick={handleOn}
        >large</Button>
      </>

  )
}
