import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton()}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
