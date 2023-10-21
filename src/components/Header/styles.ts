import styled from 'styled-components'
import Ground from '../../assets/Background.png'

export const BgGround = styled.div`
  background: ${(props) => props.theme['gray-900']};

  @media (max-width: 768px) {
  }
  @media (max-width: 425px) {
  }

  /* background-image: url(${Ground});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat; */
`
export const HeaderContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 4rem;
  width: 100%;
  max-width: 88rem;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    gap: 2rem;
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
