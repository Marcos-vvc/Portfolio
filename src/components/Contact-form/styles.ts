import styled from 'styled-components'

export const BgGround = styled.div`
  /* background-color: ${(props) => props.theme['gray-900']}; */
`
export const ContainerForm = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  background-color: ${(props) => props.theme['gray-900']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    width: 100%;
    max-width: 32.5rem;

    ::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 3px ${(props) => props.theme['blue-normal']};
    }

    input {
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme['gray-50']};
      background: ${(props) => props.theme['gray-800']};
    }

    textarea {
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
      padding: 12px 16px;
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
        /* transition: background-color 0.2s; */
      }

      &:hover {
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @media (max-width: 425px) {
      flex: 1;
      width: 100%;
      max-width: 520px;
    }
  }
`
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;
`
