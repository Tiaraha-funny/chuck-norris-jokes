export type Jokes = {
  type: string
  value: {
    id: string
    joke: string
    category: []
  }
}

export type Categories = {
  categories: []
}

export type State = {
  joke: Jokes
  firstName: string
  lastName: string
  hasClicked: boolean
}

export type Action =
  | { type: 'JOKES'; joke: Jokes; hasCliked: boolean }
  | { type: 'RANDOM_JOKES'; randomJokes: Jokes; hasClicked: boolean }
  | { type: 'SELECT_CATEGORY'; categories: Categories; hasClicked: boolean }
  | {
      type: 'IMPERSONATE'
      impersonateFirstName: string
      impersonateLastName: string
    }
