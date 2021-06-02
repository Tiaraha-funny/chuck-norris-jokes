import { useContext } from 'react'
import {
  GlobalContext,
  RANDOM_JOKE_API,
} from '../GlobalComponent/GlobalContext'
import { DrawButton } from '../StyleComponent/drawButton'

export default function Button() {
  const { dispatch, state } = useContext(GlobalContext)
  const { firstName, lastName, hasClicked } = state

  return (
    <DrawButton
      type='submit'
      onClick={async () => {
        const response = await fetch(
          `${RANDOM_JOKE_API}?firstName=${firstName}&lastName=${lastName}`
        )
        const result = await response.json()
        dispatch({
          type: 'RANDOM_JOKES',
          randomJokes: result,
          hasClicked: !hasClicked,
        })
        dispatch({
          type: 'SELECT_CATEGORY',
          categories: result,
          hasClicked: !hasClicked,
        })
      }}>
      Draw a random {firstName} {lastName} Joke
    </DrawButton>
  )
}
