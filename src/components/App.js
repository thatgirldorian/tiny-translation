import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore} from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'
import '../App.css'

class App extends React.Component {

    render() {
        return <div className="ui container">
            <h2>tiny translator.</h2>
            <LanguageStore>
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                {/* Pass the context to the component */}
                    <ColorContext.Provider value={"primary"}>
                        <UserCreate />
                    </ColorContext.Provider>
            </LanguageStore>
        </div>
        
    }
}

export default App