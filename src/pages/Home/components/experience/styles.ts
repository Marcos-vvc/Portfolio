import styled from 'styled-components'

export const XpContainer = styled.main`
  padding: 4rem;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-column-gap: 64px;
  line-height: 1.6;
  /* padding: 4rem 38rem; */

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 24px;
  }
`
