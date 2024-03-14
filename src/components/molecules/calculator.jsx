import React from 'react';
import '../../assets/css/calculator.css';
import Navbar from '../atoms/navbar';

function Calculator() {

  return (
    <>
      <Navbar />
    <div class="calculator">
      <div class="output">
        <span class="result"></span>
      </div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className='operator'>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className='operator'>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='operator'>*</button>
        <button class="bg-red">C</button>
        <button>0</button>
        <button class="bg-green">=</button>
        <button className='operator'>/</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;
