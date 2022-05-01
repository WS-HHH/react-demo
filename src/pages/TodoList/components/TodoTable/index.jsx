// import TodoItem from "../TodoItem"
import Checkbox from "../../../../components/Base/Checkbox"

export default function TodoTable(props) {
  const { dataSource, onChoose } = props;
  return (
    <ul>
      {
        dataSource.map(item => 
          <TodoItem 
            key={item.id}
            itemInfo={item}
            onChoose={onChoose}
            disabled={!item.status}
          />)
      }
    </ul>
  )
}

function TodoItem(props) {
  const { itemInfo, onChoose } = props;

  return (
    <li
      className={`border-b-2 leading-10 flex items-center bg-white pl-4
        hover:bg-indigo-100 hover:border-none`
      }
      onClick={() => onChoose(itemInfo.id)}
    >
      {
        itemInfo.status ? (
          <strike>
            <Checkbox value={itemInfo.status}>{itemInfo.task}</Checkbox>
          </strike>
        ) : (
          <Checkbox value={itemInfo.status}>{itemInfo.task}</Checkbox>
        )
      }
    </li>
  )
}
