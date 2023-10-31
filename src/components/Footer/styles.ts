import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: center;
  gap: 0.375rem;
  color: ${(props) => props.theme['gray-50']};
  background: ${(props) => props.theme['gray-900']};
`
