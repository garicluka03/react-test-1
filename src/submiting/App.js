import React from 'react'
import { StyledText } from './StyledText.style'
import { StyledSubmitingArea } from './SubmitingArea.style'
const Sub = ({className, getAlgs1}) => {
    return (
        <div className={className}>
            <StyledText />
            <StyledSubmitingArea getAlgs2={getAlgs1} />
        </div>
    )
}

export default Sub
