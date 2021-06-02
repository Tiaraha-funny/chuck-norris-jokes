import { State, Action } from '../Interfaces'

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'JOKES': {
      return {
        ...state,
        joke: action.joke,
        hasCliked: action.hasCliked,
      }
    }

    case 'RANDOM_JOKES': {
      return {
        ...state,
        randomJokes: action.randomJokes,
        hasClicked: action.hasClicked,
      }
    }

    case 'IMPERSONATE': {
      return {
        ...state,
        firstName: action.impersonateFirstName,
        lastName: action.impersonateLastName,
      }
    }

    case 'SELECT_CATEGORY': {
      return {
        ...state,
        categories: action.categories,
        hasClicked: action.hasClicked,
      }
    }

    default:
      return state
  }
}
