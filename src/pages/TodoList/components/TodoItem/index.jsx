import Checkbox from "../../../../components/Base/Checkbox"

export default function TodoItem(props) {

  const { itemInfo } = props;
  return (
    <li className="border-b-2 leading-10 flex items-center bg-white pl-4 hover:bg-indigo-100 hover:border-none">
      <Checkbox>{itemInfo.task}</Checkbox>
    </li>
  )
}