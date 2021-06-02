import styled from 'styled-components'

export const Container = styled.fieldset`
  position: relative;
  padding: 0;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid #c4c4c4;
`
export const Wrapper = styled.div`
  height: 58px;
  width: 100%;
`

export const Selector = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  outline: none;
  border: none;
  background-color: #ffffff;
  color: #c4c4c4;
  padding-inline-start: 14px;
`

export const Image = styled.img`
  width: 12px;
  height: 20px;
  color: #c4c4c4;
  position: absolute;
  right: 20px;
  top: 20px;
`

export const DefaultOption = styled.option`
  color: #c4c4c4;
`
