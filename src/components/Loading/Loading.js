import React from 'react'
import './Loading.css'

const Loading =()=> {
  return (
    <div class="loading-container">
      <div class="circle outer-lv3">
        <div class="circle outer-lv2">
          <div class="circle outer-lv1">
            <div class="center">
              <div class="arrow top"></div>
              <div class="arrow left"></div>
              <div class="arrow right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
