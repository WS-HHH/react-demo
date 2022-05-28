import React, { useContext } from 'react'

const themes = {
  light: {
    foreground: '#000',
    background: '#EEE',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  }
};

const ThemeContext = React.createContext(themes.dark);

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground}}>I am styled by theme context</button>
  )
}

function Toolbar(props) {
  console.log('props', props);
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function DemoUseContext() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

export default DemoUseContext;
