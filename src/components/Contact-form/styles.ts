import styled from 'styled-components'

export const BgGround = styled.div``

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
    margin-top: 48px;
    width: 100%;
    /* max-width: 520px; */

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
      }

      &:hover {
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.875rem;
    line-height: 1.6;
  }
`
