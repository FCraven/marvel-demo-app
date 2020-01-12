import React from 'react'
import './CaptainAmericaLoading.css'

const CaptainAmericaLoading =()=> {
  return (
    <div className="loading-container">
      <div className="circle outer-lv3">
        <div className="circle outer-lv2">
          <div className="circle outer-lv1">
            <div className="center">
              <div className="arrow top"></div>
              <div className="arrow left"></div>
              <div className="arrow right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainAmericaLoading
