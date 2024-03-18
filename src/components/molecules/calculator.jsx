import React, { useState } from 'react';
import Navbar from '../atoms/navbar';
import "../../assets/css/calculator.css";

function Calculator() {
    const [input, setInput] = useState("");
    const [lexResult, setLexResult] = useState([]);
    const [operations, setOperations] = useState([]);
    const [operationTree, setOperationTree] = useState("");
    const [operationElements, setOperationElements] = useState([]); 

    const handleClick = (e) => {
        setInput(input + e.target.name);
        setLexResult([...lexResult, e.target.name]);
        setOperationElements([...operationElements, e.target.name]); 
    }

    const calculate = () => {
        try {
            const result = eval(input).toString();
            setInput(result);
            setOperations([...operations, `${input} = ${result}`]);
            setOperationTree(createOperationTree(input));
        } catch (error) {
            setInput("Error");
        }
    }

    const clear = () => {
        setInput("");
        setLexResult([]);
        setOperationTree("");
        setOperationElements([]); 
    }

    const createOperationTree = (input) => {
        const elements = input.split(/(\+|\-|\/|\*)/);
        let tree = '';
        elements.forEach((element, index) => {
            const symbol = index % 2 === 0 ? '/' : '\\';
            if (element !== "") {
                tree += symbol + ' '.repeat(index) + element + '\n';
            }
        });
        return tree;
    }

    return ( 
        <>
        <Navbar/>
            <div className="container">
                <div id="cal-body">
                    <div className="input">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div style={{paddingTop: '3rem'}}>
                        <div className="buttons">
                            <button name="1" onClick={handleClick}>1</button>
                            <button name="2" onClick={handleClick}>2</button>
                            <button name="3" onClick={handleClick}>3</button>
                            <button className='operator' name="+" onClick={handleClick}>+</button>
                        </div>
                        <div className="buttons">
                            <button name="4" onClick={handleClick}>4</button>
                            <button name="5" onClick={handleClick}>5</button>
                            <button name="6" onClick={handleClick}>6</button>
                            <button name="-" onClick={handleClick}>-</button>
                        </div>
                        <div className="buttons">
                            <button name="7" onClick={handleClick}>7</button>
                            <button name="8" onClick={handleClick}>8</button>
                            <button name="9" onClick={handleClick}>9</button>
                            <button name="*" onClick={handleClick}>*</button>
                        </div>
                        <div className="buttons">
                            <button name="." onClick={handleClick}>.</button>
                            <button name="0" onClick={handleClick}>0</button>
                            <button name="(" onClick={handleClick}>(</button>
                            <button name=")" onClick={handleClick}>)</button>
                        </div>
                        <div className="buttons">
                            <button onClick={clear}>CL</button>
                            <button name="/" onClick={handleClick}>/</button> 
                            <button style={{ width: "18rem"}} onClick={calculate}>=</button>
                        </div>
                    </div>
                </div>
                <div id="operations">
                  <div className='result'>
                    <p className='tituloOperaciones'>Operaciones</p>
                    {operations.map((operation, index) => (
                        <p className="estiloImpresion" key={index}>{index + 1}.- {operation}</p>
                    ))}
                  </div>
                </div>
                <div className='div-arbol'>
                  <div className='resultArbol'>
                    <p className='tituloOperaciones'>Arbol</p>
                    <pre className="estiloImpresion">{operationTree}</pre>
                  </div>
                </div>
            </div>
        </>
     );
}

export default Calculator;