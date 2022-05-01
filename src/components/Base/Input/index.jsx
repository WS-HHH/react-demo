import classNames from 'classnames'

const inputBase = `
  border border-gray-300 rounded py-0.5 outline-none
  hover:border-indigo-700
  focus:border-indigo-700
`

export default function Input(props) {
  const {
    className,
    ...rest
  } = props
  const inputClass = classNames(inputBase, className);

  return (
    <input
      className={inputClass}
      {...rest}
    />
  )
}
