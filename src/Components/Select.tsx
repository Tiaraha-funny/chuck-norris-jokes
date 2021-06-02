import { useContext, useEffect, useState } from 'react'
import {
  CATEGORY_JOKE_API,
  GlobalContext,
  RANDOM_JOKE_API,
} from '../GlobalComponent/GlobalContext'
import {
  Container,
  Image,
  Selector,
  DefaultOption,
  Wrapper,
} from '../StyleComponent/select'
import Up from '../Icons/arrow-up.svg'
import Down from '../Icons/arrow-down.svg'

export default function Select() {
  const { dispatch, state } = useContext(GlobalContext)
  const {
    joke: { value },
    hasClicked,
  } = state

  const categoryValue = value?.category === undefined

  const [categories, setCategories] = useState([])
  const [openSelector, setOpenSelector] = useState(false)

  let names

  async function Category() {
    const response = await fetch(CATEGORY_JOKE_API)
    const result = await response.json()
    setCategories(result.value)
  }

  async function handleSelectOnChange(e: any) {
    const response = await fetch(`${RANDOM_JOKE_API}${CATEGORY_JOKE_API}`)
    const result = await response.json()
    dispatch({
      type: 'SELECT_CATEGORY',
      categories: result,
      hasClicked: false,
    })

    dispatch({
      type: 'JOKES',
      joke: result,
      hasClicked: false,
    })
  }

  useEffect(() => {
    Category()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(openSelector)

  const getCategoryFromFetch = categories?.map((categoryOpt) => {
    return (
      <option value={categoryOpt} key={categoryOpt[0]}>
        {categoryOpt}
      </option>
    )
  })

  const getCategoryFromState = value?.category?.map((categoryOpt) => {
    return (
      <option key={categoryOpt[1]} value={categoryOpt}>
        {categoryOpt}
      </option>
    )
  })

  return (
    <Container>
      <Wrapper>
        <Selector
          placeholder='Category'
          name={names}
          className='category'
          onChange={(e) => {
            setOpenSelector(true)
            hasClicked && handleSelectOnChange(e)
          }}>
          <DefaultOption>Select Category</DefaultOption>
          {categoryValue ? getCategoryFromFetch : getCategoryFromState}
        </Selector>
        <Image src={openSelector ? Up : Down} />
      </Wrapper>
    </Container>
  )
}
