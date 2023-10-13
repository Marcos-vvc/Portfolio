import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: -3rem;
  height: 60rem;
`

export const MyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.625rem;

  .section {
    display: flex;
    align-items: center;
    margin-top: 60px;
    gap: 1.125rem;

    .numeroEspecial {
      font-size: 5rem;
      font-weight: 700;
      height: 101px;
      color: ${(props) => props.theme['text-number']};
    }

    span {
      color: ${(props) => props.theme['text-color']};
      text-transform: uppercase;
      font-size: 1.688rem;
      font-family: 'Open Sans';
      font-weight: 300;
    }

    span:nth-of-type(2) {
      border-top: 12px solid transparent;
    }
    span:nth-of-type(4) {
      border-top: 15px solid transparent;
    }
  }
`
export const Title = styled.span`
  color: ${(props) => props.theme.white};
  font-size: 2.438rem;
`
export const Name = styled.span`
  color: ${(props) => props.theme['blue-normal']};
  font-size: 4.25rem;
`
export const SubTitle = styled.span`
  color: ${(props) => props.theme['text-title']};
  font-size: 2.5rem;
  font-family: 'Open Sans';
  font-weight: 500;
  margin-top: 38px;
`

export const LogoReact = styled.div`
  display: flex;
  width: 34.063rem;
  position: static;

  img {
    &:nth-of-type(1) {
      position: relative;
      top: 12.8rem;
      left: 12%;
      width: 8rem;
      height: 8rem;
    }

    &:nth-of-type(2) {
      width: 25rem;
      height: 25rem;
      border-radius: 32.875rem;
      background: #2d2d2d;
    }

    &:nth-of-type(3) {
      position: relative;
      width: 5.25rem;
      height: 5.25rem;
      top: 1rem;
      right: 15%;
    }

    &:nth-of-type(4) {
      position: relative;
      top: 20rem;
      right: 32%;
      width: 5rem;
      height: 5rem;
    }
  }
`
