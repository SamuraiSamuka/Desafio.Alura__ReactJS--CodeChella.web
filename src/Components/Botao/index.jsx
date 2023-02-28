import React from 'react'
import { HiTicket } from "react-icons/Hi"
import "./Botao.css"

export default function Botao({children}) {
  return (
    <button type='button' className='botao'>
        {children}
        <HiTicket />
    </button>
  )
}
