import { useContext } from 'react'
import {
  GlobalContext,
  RANDOM_JOKE_API,
} from '../GlobalComponent/GlobalContext'

import { FormField } from '../StyleComponent/form'

import Button from './Button'
import Inputs from './Input'
import Select from './Select'

export default function Form() {
  const { dispatch } = useContext(GlobalContext)

  let firstNameValue = ''
  let lastNameValue = ''

  async function handleOnSubmit(e: any) {
    e.preventDefault()
    const eventTarget = e.currentTarget.impersonate.value
    if (eventTarget.trim() === '') {
      firstNameValue = 'Chuck'
      lastNameValue = 'Norris'
    } else if (eventTarget.trim() !== '') {
      firstNameValue = eventTarget.split(' ').shift()
      lastNameValue = eventTarget.split(' ').slice(1).join(' ')
    }

    dispatch({
      type: 'IMPERSONATE',
      impersonateFirstName: firstNameValue,
      impersonateLastName: lastNameValue,
    })
    const response = await fetch(
      `${RANDOM_JOKE_API}?firstName=${firstNameValue}&lastName=${lastNameValue}`
    )
    const result = await response.json()
    dispatch({
      type: 'JOKES',
      joke: result,
    })
  }

  return (
    <FormField onSubmit={(e) => handleOnSubmit(e)}>
      <Select />
      <Inputs />
      <Button />
    </FormField>
  )
}
