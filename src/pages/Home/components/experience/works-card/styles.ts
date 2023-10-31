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
  gap: 1rem;

  img {
    border: 1px solid gray;
    border-radius: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .line {
    height: 100%;
    width: 2px;
    background: ${(props) => props.theme['gray-600']};
  }
`
export const CardWork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h3 {
    color: ${(props) => props.theme['gray-300']};
  }

  > h4 {
    font-family: 'IBM Plex Mono';
    color: ${(props) => props.theme['gray-500']};
  }

  > span {
    color: ${(props) => props.theme['gray-500']};
  }

  p {
    color: ${(props) => props.theme['gray-400']};
  }
`
