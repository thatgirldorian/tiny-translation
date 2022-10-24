import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'
import '../App.css'

class App extends React.Component {
    state = {language: 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }

    render() {
        return <div className="ui container">
            <h2>tiny translator.</h2>
            <LanguageSelector onLanguageChange={this.onLanguageChange} />
            {/* Pass the context to the component */}
            <LanguageContext.Provider value={this.state.language}>
                <ColorContext.Provider value={"primary"}>
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageContext.Provider>
        </div>
        
    }
}

export default App