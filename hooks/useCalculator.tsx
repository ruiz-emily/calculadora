import { useState } from 'react';

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>('');
  const [displayValue, setDisplayValue] = useState<string>('0');

  // 1. Limpiar pantalla (AC)
  const limpiar = () => {
    setFormula('');
    setDisplayValue('0');
  };

  // 2. Borrar último carácter (⌫)
  const borrar = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  // 3. Escribir números, operadores básicos o funciones científicas
  const escribir = (char: string) => {
    const val = parseFloat(displayValue);

    // Funciones científicas de cálculo inmediato sobre el valor actual
    if (char === '√') {
      try {
        const res = Math.sqrt(val);
        setFormula(`√(${displayValue})`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'x²') {
      try {
        const res = Math.pow(val, 2);
        setFormula(`(${displayValue})²`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'x³') {
      try {
        const res = Math.pow(val, 3);
        setFormula(`(${displayValue})³`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'log') {
      try {
        const res = Math.log10(val);
        setFormula(`log(${displayValue})`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'ln') {
      try {
        const res = Math.log(val);
        setFormula(`ln(${displayValue})`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'sin') {
      try {
        const rad = (val * Math.PI) / 180;
        const res = Math.sin(rad);
        setFormula(`sin(${displayValue}°)`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'cos') {
      try {
        const rad = (val * Math.PI) / 180;
        const res = Math.cos(rad);
        setFormula(`cos(${displayValue}°)`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }
    if (char === 'tan') {
      try {
        const rad = (val * Math.PI) / 180;
        const res = Math.tan(rad);
        setFormula(`tan(${displayValue}°)`);
        setDisplayValue(String(Number(res.toFixed(6))));
      } catch { setDisplayValue('Error'); }
      return;
    }

    // Operaciones y números básicos
    if (displayValue === '0' && char !== '.' && !['+', '-', '×', '÷', '%'].includes(char)) {
      setDisplayValue(char);
      return;
    }

    // Evitar múltiples puntos decimales consecutivos en el número actual
    if (char === '.') {
      const parts = displayValue.split(/[\+\-\×\÷]/);
      const currentNumber = parts[parts.length - 1];
      if (currentNumber.includes('.')) return;
    }

    setDisplayValue((prev) => prev + char);
  };

  // 4. Calcular el resultado final de toda la expresión
  const calcular = () => {
    try {
      let expresion = displayValue
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/%/g, '/100');

      const resultado = new Function(`return ${expresion}`)();

      if (isNaN(resultado) || !isFinite(resultado)) {
        setDisplayValue('Error');
        return;
      }

      setFormula(`${displayValue} =`);
      setDisplayValue(String(Number(resultado.toFixed(6))));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return {
    formula,
    displayValue,
    limpiar,
    borrar,
    escribir,
    calcular,
  };
};