import React, { useEffect, useState } from 'react'

const ProgressBar = ({progress}) => {
    const [animatedProgress, setAnimatedProgress]=useState(0)

    useEffect(()=>{
        setTimeout(()=> setAnimatedProgress(progress),100)
    }, [progress])
  return (
    <div>
        <div className="outer">
            <div className="inner" style={{
                // width:`${animatedProgress}%`, 
                transform: `translateX(${animatedProgress-100}%)`,
                color: animatedProgress<4 ? 'black':'white', 
                padding:'5px' }} role='progress' aria-valuemax='100' aria-valuemin='0' aria-valuenow={animatedProgress}>{animatedProgress}%</div>
        </div>
    </div>
  )
}

export default ProgressBar