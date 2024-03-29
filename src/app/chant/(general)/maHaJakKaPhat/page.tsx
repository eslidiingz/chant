import MaHaJakKaPhat from '@/components/Chant/MaHaJakKaPhat'
import Counter from '@/components/Counter'
import React from 'react'

const MaHaJakKaPhatPage = () => {
  return (
    <React.Fragment>
      <div className="chant-container">
        <MaHaJakKaPhat />
        <div className="text-center">
          <Counter />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MaHaJakKaPhatPage