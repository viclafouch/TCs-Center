import React from 'react'
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'
import Popup from '@containers/Popup/Popup'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import muiThemes from '@shared/themes'
import { AnswersProvider } from '@stores/Answers'
import { DefaultProvider } from '@stores/Default'
import { SettingsContext, SettingsProvider } from '@stores/Settings'
import { SnackbarProvider } from 'notistack'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

function App(props) {
  return (
    <ErrorBoundary>
      <SettingsProvider initialState={props.settingsInitialStore}>
        <DefaultProvider initialState={props.defaultInitialStore}>
          <AnswersProvider>
            <SettingsContext.Consumer>
              {([settings]) => (
                <MuiThemeProvider theme={muiThemes[settings.theme]}>
                  <ThemeProvider theme={muiThemes[settings.theme]}>
                    <SnackbarProvider
                      maxSnack={1}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                      }}
                    >
                      <CssBaseline />
                      <Popup
                        initalCurrentView={props.settingsInitialStore.startView}
                      />
                    </SnackbarProvider>
                  </ThemeProvider>
                </MuiThemeProvider>
              )}
            </SettingsContext.Consumer>
          </AnswersProvider>
        </DefaultProvider>
      </SettingsProvider>
    </ErrorBoundary>
  )
}

App.propTypes = {
  settingsInitialStore: PropTypes.object.isRequired,
  defaultInitialStore: PropTypes.object.isRequired
}

export default App
