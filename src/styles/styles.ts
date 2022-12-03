import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  padding: 0 1rem;
  text-align: center;
  background-color: ${(props) => props.theme['gray-900']};
  margin-bottom: 10rem;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    align-items: flex-start;
  }
`

export const Heading = styled.h1`
  span {
    font-size: 2.5rem;
    color: ${(props) => props.theme['blue']};
    @media screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`
export const Heading2 = styled.h2``

export const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 100%;
    align-items: flex-start;
    padding: 2.5rem;
  }
`

export const HeadingAndData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
