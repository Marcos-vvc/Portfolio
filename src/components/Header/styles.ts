import styled from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 3rem;

  header {
    display: flex;
    align-items: center;
    gap: 3.938rem;
    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
  }

  span {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    padding: 0.5rem 1.25rem;
  }

  span:hover {
    border-radius: 8px;
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px ${(props) => props.theme['blue-normal']};
  }

  span:active {
    transform: translateY(-1px);
    background-color: #4b5563;
  }

  img {
    height: 3.688rem;
    width: 4.063rem;
  }
`
