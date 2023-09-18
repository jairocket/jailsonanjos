import styled, { DefaultTheme, css } from 'styled-components'

const flagModifiers = {
    selected: (theme: DefaultTheme) => css`
        border: 2px ${theme.blue} solid;
        outline: none;
    `
} 

export const FlagContainer = styled.div<{ isSelected: boolean }>`
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;

    ${({ isSelected, theme }) => isSelected && flagModifiers.selected(theme)}
    width: fit-content;

    :hover {
        cursor: pointer;
    } 

`
export const FlagImage = styled.img`
    width: 2.5rem;
`