import React, { useState } from 'react';
import './Calcolatrice.css';

const Calcolatrice = () => {
    const [risultato, setRisultato] = useState('');

    const calcolatriceFunction = (e) => {
        if (risultato === 'Error!') {
            setRisultato(e.target.name);
        }
        else {
            setRisultato(risultato.concat(e.target.name));
        }
    }

    const calcolaFunction = () => {
        try {
            setRisultato(eval(risultato).toString());
        }
        catch (error) {
            setRisultato('Error!')
        }
    }

    const clearAll = () => {
        setRisultato('');
    }

    const cancellaFunction = () => {
        setRisultato(risultato.slice(0, -1));
    }

    return (
        <React.Fragment>
            <section>
                <div id="calcolatrice">
                    {/* risultato */}
                    <input type="text" id="input-risultato" value={risultato} readOnly />

                    {/* cancella */}
                    <button id="clear" type="button" className="operators-button" onClick={clearAll} >Clear</button>
                    <button id="canc" type="button" className="operators-button" onClick={cancellaFunction}>C</button>

                    {/* calcolatriceFunction */}
                    <button name="/" type="button" onClick={calcolatriceFunction} className="operators-button" >&divide;</button>
                    <button name="7" type="button" onClick={calcolatriceFunction} >7</button>
                    <button name="8" type="button" onClick={calcolatriceFunction} >8</button>
                    <button name="9" type="button" onClick={calcolatriceFunction} >9</button>
                    <button name="*" type="button" onClick={calcolatriceFunction} className="operators-button">&times;</button>
                    <button name="4" type="button" onClick={calcolatriceFunction} >4</button>
                    <button name="5" type="button" onClick={calcolatriceFunction} >5</button>
                    <button name="6" type="button" onClick={calcolatriceFunction} >6</button>
                    <button name="-" type="button" onClick={calcolatriceFunction} className="operators-button" >&ndash;</button>
                    <button name="1" type="button" onClick={calcolatriceFunction} >1</button>
                    <button name="2" type="button" onClick={calcolatriceFunction} >2</button>
                    <button name="3" type="button" onClick={calcolatriceFunction} >3</button>
                    <button name="+" type="button" onClick={calcolatriceFunction} className="operators-button">+</button>
                    <button name="0" type="button" onClick={calcolatriceFunction} >0</button>
                    <button name="." type="button" onClick={calcolatriceFunction} >.</button>

                    {/* calcolaFuncion */}
                    <button id="risultato" type="button" className="operators-button" onClick={calcolaFunction} >=</button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Calcolatrice;