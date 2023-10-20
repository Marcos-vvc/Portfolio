import styled from 'styled-components'

export const WorkContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: gray; */
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 40px;
  margin-top: 24px;
`

export const Imag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  img {
    border: 1px solid gray;
    border-radius: 40px;
    width: 40px;
    height: 40px;
  }

  .line {
    height: 100%;
    background: gray;
    width: 1px;
  }
`
export const Uber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    margin-top: 24px;
  }
`
