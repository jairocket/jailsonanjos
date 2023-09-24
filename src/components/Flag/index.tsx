import { FlagContainer, FlagImage } from "./styles";

type FlagType = {
    image: string;
    isSelected: boolean;
    onClick?: () => void
}

export const Flag = ({ image, isSelected, onClick }: FlagType) => (
    <FlagContainer isSelected={isSelected} onClick={onClick}>
        <FlagImage alt="flag" src={ image } />
    </FlagContainer>
)