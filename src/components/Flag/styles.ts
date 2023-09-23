import styled, { DefaultTheme, css } from 'styled-components'

const flagModifiers = {
    selected: (theme: DefaultTheme) => css`
        border: 3px ${theme.blue} solid;
    `,
    notSelected: (theme: DefaultTheme) => css`
        border: 3px transparent solid;
    `
} 

export const FlagContainer = styled.div<{ isSelected: boolean }>`
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 8px;

    ${({ isSelected, theme }) => isSelected ? flagModifiers.selected(theme) : flagModifiers.notSelected(theme)}
    
    width: fit-content;

    :hover {
        cursor: pointer;
    } 

`
export const FlagImage = styled.img`
    width: 2.5rem;
`