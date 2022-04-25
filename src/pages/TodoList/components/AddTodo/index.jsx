import Button from '../../../../components/Base/Button/index.jsx'

export default function AddTodo() {
  return (
    <>
      <input type="text" />
      <div>
        <Button type="primary" size="large">large</Button>
      </div>
      <div style={{ marginTop: '10px', marginBottom: '10px'}}>
        <Button type="primary" size="small">small</Button>
      </div>
      <Button>middle</Button>
    </>
  )
}