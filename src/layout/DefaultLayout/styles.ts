import styled from 'styled-components'

export const LayoutContainer = styled.div`
  > main {
    width: 100%;
    max-width: 88rem;
    margin: 0 auto;
    padding: 0 1.5rem;

    @media (max-width: 88rem) {
      padding: 0 1rem;
    }
  }
`
