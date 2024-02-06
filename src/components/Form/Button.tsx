import React from 'react'

interface ButtonProps {
  className?: string
  children: React.ReactNode;
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      onClick={props.onClick} 
      className={`btn-primary ${props.className}`}
    >{props.children}</button>
  )
}

export default Button