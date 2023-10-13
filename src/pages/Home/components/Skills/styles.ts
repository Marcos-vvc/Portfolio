import styled from 'styled-components'

export const ContainerMain = styled.div`
  margin-top: 9.25rem;
  padding: 4rem;
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
  color: ${(props) => props.theme['blue-normal']};
`
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  gap: 12px;
  margin-top: 3.75rem;
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
      color: rgb(50, 148, 248);
    }
  }

  .CardInside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
