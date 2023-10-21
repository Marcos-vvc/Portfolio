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

  .ContainerIcons {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 1.875rem;

    svg:hover {
      cursor: pointer;
      color: ${(props) => props.theme['blue-normal']};
      transition: all 0.3s ease 0s;
    }

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }
  }

  .react-icons {
    display: flex;
    gap: 12px;
    color: #4b5563;
  }

  span {
    font-size: 3.75rem;
    color: ${(props) => props.theme['blue-normal']};
  }

  p {
    margin-top: 1.875rem;
    font-family: 'Open Sans';
    font-size: 1.125rem;
    color: ${(props) => props.theme['text-color']};
  }

  button {
    cursor: pointer;
    color: ${(props) => props.theme.white};
    background: rgba(75, 85, 99, 0.2);
    width: 12.125rem;
    height: 3.2rem;
    border-radius: 0.5rem;
    border: none;
    transition: all 0.3s ease 0s;

    svg {
      margin-left: 0.5rem;
    }

    &:hover {
      background: rgb(75 85 99);
    }
    &:hover {
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
