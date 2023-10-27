import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  background-color: ${(props) => props.theme['gray-900']};
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    margin-top: 3rem;
    width: 100%;

    ::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 3px ${(props) => props.theme['blue-normal']};
    }

    input {
      width: 100%;
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme['gray-50']};
      background: ${(props) => props.theme['gray-800']};

      @media (max-width: 768px) {
      }
    }

    textarea {
      width: 100%;
      border: none;
      resize: none;
      height: 8.625rem;
      padding: 1rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme['gray-50']};
      background: ${(props) => props.theme['gray-800']};
      margin-bottom: 3rem;
    }

    button[type='submit'] {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 1rem;
      margin: 0 auto;
      border: 0;
      border-radius: 0.5rem;
      gap: 0.5rem;
      width: 12.375rem;
      cursor: pointer;
      color: ${(props) => props.theme['gray-50']};
      background: ${(props) => props.theme['blue-normal']};

      &:not(:disabled):hover {
        background: ${(props) => props.theme['gray-800']};
      }

      &:hover {
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`

export const FormContent = styled.div`
  max-width: 32.5rem;
  width: 100%;

  @media (max-width: 768px) {
    width: 23.063rem;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  span {
    font-family: 'IBM Plex Mono';
    color: ${(props) => props.theme['blue-normal']};
  }

  h2 {
    font-size: 1.875rem;
    line-height: 1.6;

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

  @media (max-width: 768px) {
    width: 23.063rem;
  }
`
