import styled from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  /* background: red; */

  header {
    display: flex;
    align-items: center;
    gap: 3.938rem;

    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
  }

  img {
    height: 3.688rem;
    width: 4.063rem;
  }
`
