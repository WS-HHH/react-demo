import { useState } from 'react'
import { nanoid } from 'nanoid'
import AddTodo from './components/AddTodo'
import TodoTable from './components/TodoTable'

// 容器组件
export default function TodoList() {
  const [listArr, setTodoList] = useState([]);
  const [count, setCount] = useState(0)
  function handelAdd(value) {
    const obj = {
      id: nanoid(),
      status: false,
      task: value,
    }

    listArr.push(obj);
    setTodoList([...listArr])
  }

  /**
   * 
   * 没有命中react更新
   * 引用和引用地址的变化，来更新 
   */
  // function handelAdd(value) {
  //   let arr = listArr;
  //   // arr -> 0xlistArr
  //   // listArr -> 0xlistArr;
  //   const obj = {
  //     id: nanoid(),
  //     status: false,
  //     task: value,
  //   };

  //   arr.push(obj);

  //   console.log('arr', arr);
  //   console.log('listArr', listArr);

  //   setTodoList((arr) => { arr.push(obj); return [...arr]});
  //   console.log('listArr', listArr);
  // }

  function handelTodo(id) {
    let arr = listArr.map(item => item.id === id ? {...item, status: !item.status} : {...item})
    setTodoList([...arr])
  }

  function addCount(){
    setCount((count)=>count+1)
    setCount((count)=>count+1)
    setCount((count)=>count+1)
  }


  return (
    <div className="rounded border  w-7/12 my-12 mx-auto bg-gray-100 shadow-xl">
      {count}
      <button onClick={addCount}>+3</button>
      <div className="mt-12">
        <AddTodo onAdd={handelAdd} />
      </div>
      <div className="mt-12 p-12">
        <TodoTable dataSource={listArr} onChoose={handelTodo} />
      </div>
    </div>
  )
}
