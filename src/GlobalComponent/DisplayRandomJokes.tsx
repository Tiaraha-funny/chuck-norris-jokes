import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

import { Container, Picture, Text } from '../StyleComponent/display'

import chuckNorrisPhoto from '../Images/chuck-norris/chuck-norris-lg-photo.png'
import randomPhoto from '../Images/random-photo/random-lg-photo.jpg'
import SaveButtons from '../Components/SaveButtons'
import Form from '../Components/Form'

export default function DisplayRandomJokes() {
  const { state } = useContext(GlobalContext)

  const {
    joke: {
      value: { joke },
    },
    firstName,
    lastName,
  } = state

  return (
    <Container>
      <Picture>
        {firstName !== 'Chuck' || lastName !== 'Norris' ? (
          <img src={randomPhoto} alt='random vantar' />
        ) : (
          <img src={chuckNorrisPhoto} alt='random Chunck Norris' />
        )}
      </Picture>
      <Text>
        <q>{joke}</q>
      </Text>
      <Form />
      <SaveButtons />
    </Container>
  )
}
