'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Button from './Form/Button'

interface CounterProps {
  align?: 'left' | 'center' | 'right'
}

const Counter = (props: CounterProps) => {
  const counterClasses = `text-${props.align}`

  const [counter, setCounter] = useState<number>(0)

  const increaseCounter = () => {
    Swal.fire({
      title: 'คุณต้องการนับรอบใช่หรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result: any) => {
      if ( result?.isConfirmed ) {
        setCounter(counter + 1)
      }
    })
    
  }
  
  return (
    <div className={`${counterClasses}`}>
      <hr className='mb-8' />
      <div className='mb-8 text-2xl'>สวดเสร็จแล้ว {counter} รอบ</div>
      <Button 
        className='text-2xl'
        onClick={increaseCounter}
      >กดเพื่อนับรอบเพิ่ม</Button>
    </div>
  )
}

export default Counter