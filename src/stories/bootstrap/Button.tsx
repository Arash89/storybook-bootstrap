import { ReactNode, memo } from 'react'

interface IButton {
  children: ReactNode;
  className: string;
}

const Button = ({ children, className }: IButton) => (<button className={className}>{children}</button>)

export default memo(Button)
