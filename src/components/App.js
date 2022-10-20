import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
    state = {language: 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }

    render() {
        return <div className="ui container">
            <h2>tiny translator.</h2>
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
                <i className="flag pt" onClick={() => this.onLanguageChange('portugese')}></i>
            </div>
            {/* Pass the context to the component */}
            <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
            </LanguageContext.Provider>
        </div>
        
    }
}

export default App