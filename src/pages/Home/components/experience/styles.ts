import styled from 'styled-components'

export const XpContainer = styled.main`
  padding: 4rem;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-column-gap: 64px;
  line-height: 1.6;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1rem;
  }

  p {
    margin-top: 1.5rem;
  }
`
