import React from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import useCalculator from './useCalculator';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../redux/historySlice';

const Calculator = () => {
  const { input, handleButtonClick } = useCalculator();
  const dispatch = useDispatch();

  const handleEqualsClick = () => {
    if (input.trim() === '') return;

    try {
      const result = eval(input).toString();
      dispatch(addToHistory(`${input} = ${result}`));
      handleButtonClick('=');
    } catch {
      handleButtonClick('Error');
    }
  };

  const buttons = [
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: 'Del', className: '' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '/', className: 'operation' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '*', className: 'operation' },
    { value: '0', className: '' },
    { value: '%', className: 'operation' },
    { value: '-', className: 'operation' },
    { value: '+', className: 'operation' },
    { value: '.', className: '' },
    { value: 'C', className: '' },
    { value: '=', className: 'equal' },
  ];

  return (
    <div className="calculator">
      <h3>Calculator</h3>
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            value={btn.value}
            onClick={btn.value === '=' ? handleEqualsClick : () => handleButtonClick(btn.value)}
            className={btn.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
