import React from 'react'
import UserCreate from './UserCreate'

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
            <UserCreate />
        </div>
        
    }
}

export default App