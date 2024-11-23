import React from 'react'

const ModalCustom = ({ title, children }) => {
    console.log(children)
  return (
    <div>
        <h2>{title}</h2>
        <h3>algo mas</h3>
        {children}
    </div>
  )
}

export default ModalCustom
