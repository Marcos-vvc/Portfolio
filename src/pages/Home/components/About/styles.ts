import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 3rem;
  align-items: center;
  margin-top: 4rem;

  img {
    width: 36.5rem;
    height: 25rem;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    img {
      padding: 0 auto;
      width: 22.9rem;
      height: 18rem;
    }
  }
`
export const Content = styled.div`
  line-height: 1.6;

  span {
    font-size: 3.75rem;
    color: ${(props) => props.theme['blue-normal']};
  }

  p {
    margin-top: 1.875rem;
    font-family: 'Open Sans';
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-400']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background: rgba(75, 85, 99, 0.2);
    width: 12.125rem;
    height: 3.2rem;
    border-radius: 0.5rem;
    border: none;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
      color: rgb(50, 148, 248);
    }
  }

  strong {
    color: #fff;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.875rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray-600']};
  }

  svg:hover {
    cursor: pointer;
    color: ${(props) => props.theme['gray-50']};
    transition: all 0.3s ease 0s;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`
export const ReactIcons = styled.div`
  display: flex;
  gap: 0.75rem;
`
