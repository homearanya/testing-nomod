import React from 'react'

import './forms.css'

interface LoadingCheckProps {
  submitted: boolean
  colorWhite?: boolean
}

const LoadingCheck = ({ submitted, colorWhite = false }: LoadingCheckProps) => (
  <div style={{ textAlign: 'center' }}>
    <div
      className={
        submitted
          ? `circle-loader load-complete ${colorWhite ? 'colorWhite' : ''}`
          : `circle-loader ${colorWhite ? 'colorWhite' : ''}`
      }
    >
      <div
        className={`checkmark draw ${colorWhite ? 'colorWhite' : ''}`}
        style={{ display: submitted ? 'block' : undefined }}
      />
    </div>
  </div>
)

export default LoadingCheck
