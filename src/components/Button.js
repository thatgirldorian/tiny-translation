import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
    //hook up a context object to a class component
    // static contextType = LanguageContext

    render() {
        //change the language context based on language
        // const text = this.context === 'english' ? 'Submit' : 'Submeter'
        return  (
        <button className="ui button primary">
            <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Submeter'}
            </LanguageContext.Consumer>
        </button>
        )
    }
}

export default Button