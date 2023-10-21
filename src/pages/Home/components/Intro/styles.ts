import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -4rem;
  height: 60rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    text-align: center;
  }
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
      height: 6.313rem;
      color: ${(props) => props.theme['text-number']};

      @media (max-width: 1024px) {
        font-size: 2.5rem;
      }
    }

    span {
      color: ${(props) => props.theme['text-color']};
      text-transform: uppercase;
      font-size: 1.688rem;
      font-family: 'Open Sans';
      font-weight: 300;

      @media (max-width: 1024px) {
        font-size: 1rem;
      }
    }

    span:nth-of-type(2) {
      border-top: 12px solid transparent;
    }
    span:nth-of-type(4) {
      border-top: 15px solid transparent;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`
export const Title = styled.span`
  color: ${(props) => props.theme.white};
  font-size: 2.438rem;
`
export const Name = styled.span`
  color: ${(props) => props.theme['blue-normal']};
  font-size: 4.25rem;

  @media (max-width: 1024px) {
    font-size: 2.125rem;
  }
`
export const SubTitle = styled.span`
  color: ${(props) => props.theme['text-title']};
  font-size: 2.5rem;
  font-family: 'Open Sans';
  font-weight: 500;
  margin-top: 2.375rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

export const LogoReact = styled.div`
  display: flex;
  max-width: 34.063rem;

  img {
    &:nth-of-type(1) {
      position: relative;
      top: 12.8rem;
      left: 12%;
      width: 8rem;
      height: 8rem;

      @media (max-width: 1024px) {
        display: none;
      }
    }

    &:nth-of-type(2) {
      width: 25rem;
      height: 25rem;
      border-radius: 32.875rem;
      background: #2d2d2d;

      @media (max-width: 1024px) {
        width: 15rem;
        height: 15rem;
      }
    }

    &:nth-of-type(3) {
      position: relative;
      width: 5.25rem;
      height: 5.25rem;
      top: 1rem;
      right: 15%;

      @media (max-width: 1024px) {
        display: none;
      }
    }

    &:nth-of-type(4) {
      position: relative;
      top: 20rem;
      right: 32%;
      width: 5rem;
      height: 5rem;

      @media (max-width: 1024px) {
        display: none;
      }
    }
    @media (max-width: 1024px) {
    }
  }
`
