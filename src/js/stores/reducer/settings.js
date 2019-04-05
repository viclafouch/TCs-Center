import { debug } from '@utils/utils'
import { SWITCH_THEME, SELECT_PRODUCTS, SWITCH_LANGUAGE } from './constants'

const SettingsReducer = (previousState, action) => {
  debug(`TCL: DefaultReducer -> type : ${action.type}`)
  const { productsSelected, theme, lang, type } = action
  switch (type) {
    case SWITCH_THEME:
      debug(`TCL: DefaultReducer -> ${JSON.stringify({ theme })}`)
      return {
        ...previousState,
        theme
      }
    case SELECT_PRODUCTS:
      debug(`TCL: DefaultReducer -> Selected ${productsSelected.length}`)
      return {
        ...previousState,
        productsSelected
      }
    case SWITCH_LANGUAGE:
      debug(`TCL: DefaultReducer -> Selected ${lang} lang`)
      return {
        ...previousState,
        lang
      }
    default:
      return previousState
  }
}
export default SettingsReducer