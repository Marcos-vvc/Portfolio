import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    background: ${(props) => props.theme['blue-normal']};
    color: ${(props) => props.theme['gray-50']};

    &:hover {
      background: #2d85df;
    }
  }
`
