import styled from 'styled-components'

export const FlagsContainer = styled.div`
    display: flex;
    justify-content: right;
    gap: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: 16px;
    padding: 2px;

    @media screen and (min-width: 768px) {
        padding: 0 8rem;
    }
`