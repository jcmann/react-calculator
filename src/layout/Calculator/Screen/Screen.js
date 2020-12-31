import React from 'react'; 
import ComputationScreen from './ComputationScreen'; 
import ResultScreen from './ResultScreen'; 

const screen = (props) => (
    <section className="screen">
        <ResultScreen result={props.result}>
        </ResultScreen> 
        <ComputationScreen equation={props.equation}>
        </ComputationScreen>
    </section>
); 

export default screen; 