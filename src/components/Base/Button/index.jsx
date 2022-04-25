import classNames from 'classnames'


const btnBase = `border border-transparent rounded-md`

const btnType = {
  primary: 'bg-indigo-600 text-white border-indigo-700',
  default: 'bg-white text-indigo-600 border-indigo-700',
}

const btnSize = {
  large: 'text-lg px-3 py-0.5',
  middle: 'text-base px-2 py-0.5',
  small: 'text-sm px-2 py-0.5'
}

export default function Button(props) {
  const {
    children,
    className,
    size = 'middle',
    type = 'default',
  } = props
  const btnClass = classNames(btnBase, className, {
    [btnType[`${type}`]]: true,
    [btnSize[`${size}`]]: true,
  });

  return (
    <button className={btnClass}>{children}</button>
  )
}
