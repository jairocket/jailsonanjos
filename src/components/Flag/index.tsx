type FlagType = {
    image: string;
    isSelected: boolean;
    onClick: (language: string) => void

}

export const Flag = ({image, isSelected}: FlagType) => (
    <img alt="flag" src={image } className={isSelected ? 'flag selected' : 'flag'}/>
)