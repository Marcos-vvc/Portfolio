import styled from 'styled-components'

export const ContainerMain = styled.div`
  margin-top: 9.25rem;
  padding: 4rem;

  > span {
    font-family: 'IBM Plex Mono';
    color: ${(props) => props.theme['blue-normal']};
  }
`

export const Content = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const Title = styled.h2`
  display: flex;
  font-size: 2rem;
  margin-top: 1rem;

  opacity: 0.9;
  background: linear-gradient(
    180deg,
    rgba(249, 250, 251, 1) 0%,
    rgba(209, 213, 219, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  gap: 0.75rem;
  width: 100%;

  .Card {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    background: rgba(75, 85, 99, 0.2);
    color: rgb(107 114 128);
    transition: all 0.3s ease 0s;

    &:hover {
      background: rgb(75 85 99);
    }
    &:hover {
      color: ${(props) => props.theme['blue-normal']};
    }
  }

  .CardInside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
