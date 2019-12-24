import React, { FC } from 'react'

import MoonIcon from '../../icons/moon.svg'
import SunIcon from '../../icons/sun.svg'
import ToggleContainer from './Toggle.styled'

interface ToggleInterface {
  theme: string
  toggleTheme: any
}

const Toggle: FC<ToggleInterface> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {isLight ? <SunIcon /> : <MoonIcon />}
    </ToggleContainer>
  )
}

export default Toggle
