import React from 'react'
import { Container, Counter, Save } from '../StyleComponent/saveButton'
import Minus from '../Icons/minus/minus.png'
import Plus from '../Icons/plus/plus.png'

export default function SaveButtons() {
  return (
    <Container>
      <Counter>
        <img src={Minus} alt='minus icon' />
        <img src={Plus} alt='plus icon' />
      </Counter>
      <Save>Save Jokes</Save>
    </Container>
  )
}
