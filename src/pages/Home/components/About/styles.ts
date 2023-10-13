import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 3rem;
  align-items: center;

  img {
    width: 36.5rem;
    height: 25rem;
  }
`
export const Content = styled.div`
  line-height: 1.6;

  span {
    font-size: 3.75rem;
    color: ${(props) => props.theme['blue-normal']};
  }

  p {
    margin-top: 30px;
    font-family: 'Open Sans';
    font-size: 1.125rem;
    color: ${(props) => props.theme['text-color']};
  }

  button {
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['blue-normal']};
    margin-top: 30px;
    width: 8rem;
    height: 3.2rem;
    border-radius: 1000px;
    border: none;

    &:hover {
      background: ${(props) => props.theme['text-color']};
    }
  }
`
