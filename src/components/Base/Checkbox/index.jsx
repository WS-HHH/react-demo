import classNames from 'classnames'

const inputBase = `
  border border-gray-300 rounded py-0.5 outline-none
  hover:border-indigo-700
  focus:border-indigo-700
`

export default function Checkbox(props) {
  const {
    className,
    children,
    value,
    ...rest
  } = props
  const inputClass = classNames(inputBase, className);

  return (
    <>
      <input
        type="checkbox"
        checked={value}
        className={inputClass}
        {...rest}
      />
      <span>&nbsp;&nbsp;{children}</span>
    </>
  )
}
