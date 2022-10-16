import React from 'react'

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
                <i className="flag ng" onClick={() => this.onLanguageChange('yoruba')}></i>
            </div>
            {this.state.language}
        </div>
        
    }
}

export default App