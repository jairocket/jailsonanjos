
import { useTranslation } from 'react-i18next'
import BrFlag from '../../assets/BrFlag.svg'
import UkFlag from '../../assets/UkFlag.svg'
import {Flag} from '../Flag'
import { FlagsContainer } from './styles'

export const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
      
  const selectedLanguage = i18n.language 
  
  return (
    <FlagsContainer>
      <Flag
        image={BrFlag}
        isSelected={selectedLanguage === 'pt-BR'} 
        onClick={() => handleChangeLanguage('pt-BR')} 
      />
      <Flag
        image={UkFlag}
        isSelected={selectedLanguage === 'en-US'} 
        onClick={() => handleChangeLanguage('en-US')} 
      />
    </FlagsContainer>
  )
}

