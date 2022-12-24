import styled from 'styled-components'

export const MobileSocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  margin: 0 2.25rem 1.75rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopSocialMediaContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 3rem;
  }
`
