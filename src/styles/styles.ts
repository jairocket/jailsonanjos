import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 0 1rem;
  text-align: center;
  background-color: ${(props) => props.theme['gray-900']};
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    margin: 0 5rem;
    align-items: flex-start;
    max-width: 1832px;
    margin-bottom: 3rem;
  }
`

export const Heading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    padding-top: 4rem;
  }

  span {
    font-size: 2.5rem;
    color: ${(props) => props.theme['blue']};
    @media screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
`
export const Heading2 = styled.h2``

export const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 2rem;
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
