import React from 'react'
import { MdLocalActivity } from "react-icons/Md"
import "./Botao.css"

export default function Botao({children}) {
  return (
    <button type='button' className='botao'>
        {children}
        <MdLocalActivity />
    </button>
  )
}
