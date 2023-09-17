import React from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook 
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import BrFlag from '../../assets/BrFlag.svg'
import UkFlag from '../../assets/UkFlag.svg'
import {Flag} from '../../components/Flag'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
  
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language 
  return (
    <div className="flags-container">

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
    </div>
  )
}

export default I18n