import React from "react";

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.props.onLanguageChange('english')}></i>
                <i className="flag pt" onClick={() => this.props.onLanguageChange('portugese')}></i>
            </div>
        )
    }
}

export default LanguageSelector