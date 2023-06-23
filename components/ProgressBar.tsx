import React from 'react'

type Props = {
  style: {
    width: string;
    height?: string | number;
    backgroundColor: string;
  }
};

const ProgressBar = ({style}: Props) => {
  return (
    <div style={style} className=' fixed z-50'></div>
  )
}

export default ProgressBar