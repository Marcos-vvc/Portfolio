import styled from 'styled-components'

export const XpContainer = styled.main`
  padding: 4rem;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-column-gap: 4rem;
  line-height: 1.6;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: 'IBM Plex Mono';
    color: ${(props) => props.theme['blue-normal']};
  }

  h1 {
    margin-top: 1rem;
    opacity: 0.9;
    background: linear-gradient(
      180deg,
      rgba(249, 250, 251, 1) 0%,
      rgba(209, 213, 219, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-top: 1.5rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
