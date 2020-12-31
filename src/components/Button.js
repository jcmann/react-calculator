import React from 'react'; 

const button = ({type, children, onButtonPress}) => {

    const classes = ['btn']; 

    if (typeof type !== 'undefined') {
        classes.push('btn' + type); 
    }

    return (
        <button onClick={onButtonPress} className={ classes.join(' ') }>
            {children}
        </button>
    );

}

export default button; 