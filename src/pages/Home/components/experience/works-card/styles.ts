import styled from 'styled-components'

export const WorkContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  grid-column-gap: 2.5rem;
  margin-top: 1.5rem;
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
  gap: 0.5rem;

  p {
    margin-top: 1.5rem;
  }
`
