import { useState } from 'react';

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>('');
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isResultCalculated, setIsResultCalculated] = useState<boolean>(false);

  // 1. Limpiar pantalla (AC)
  const limpiar = () => {
    setFormula('');
    setDisplayValue('0');
    setIsResultCalculated(false);
  };

  // 2. Borrar último carácter (⌫)
  const borrar = () => {
    if (isResultCalculated) {
      limpiar();
      return;
    }
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };

  // 3. Escribir números, operadores básicos o funciones científicas
  const escribir = (char: string) => {
    const operadores = ['+', '-', '×', '÷', '%'];
    const funcionesCientificas = ['√', 'x²', 'x³', 'log', 'ln', 'sin', 'cos', 'tan'];

    // Si acabamos de calcular un resultado...
    if (isResultCalculated) {
      // Si presionas un NÚMERO, limpiamos y empezamos de cero
      if (!operadores.includes(char) && char !== '.' && !funcionesCientificas.includes(char)) {
        setDisplayValue(char);
        setFormula('');
        setIsResultCalculated(false);
        return;
      }
      
      // Si presionas un PUNTO, concatenamos al resultado actual
      if (char === '.') {
        setDisplayValue(displayValue + '.');
        setIsResultCalculated(false);
        return;
      }

      // Si presionas un OPERADOR (+, -, etc.), el resultado previo se queda y se le añade el operador
      if (operadores.includes(char)) {
        setFormula(displayValue);
        setDisplayValue(displayValue + char);
        setIsResultCalculated(false);
      }
    }

    // Funciones científicas (ej. sin, cos, tan, etc.)
    if (funcionesCientificas.includes(char)) {
      // Validar si ya existe una función científica previa en el display para permitir solo una
      const yaTieneFuncion = funcionesCientificas.some((f) => 
        displayValue.includes(f) || displayValue.startsWith('sin(') || displayValue.startsWith('cos(') || displayValue.startsWith('tan(') || displayValue.startsWith('√(') || displayValue.startsWith('log(') || displayValue.startsWith('ln(')
      );

      if (yaTieneFuncion) {
        return; // Si ya tiene una función aplicada, bloqueamos para que no ponga más de una
      }

      let expresionActual = displayValue;

      let formatoVisual = '';
      if (char === '√') formatoVisual = `√(${expresionActual})`;
      else if (char === 'x²') formatoVisual = `(${expresionActual})²`;
      else if (char === 'x³') formatoVisual = `(${expresionActual})³`;
      else if (char === 'log') formatoVisual = `log(${expresionActual})`;
      else if (char === 'ln') formatoVisual = `ln(${expresionActual})`;
      else formatoVisual = `${char}(${expresionActual})`;

      setDisplayValue(formatoVisual);
      setIsResultCalculated(false); // Espera a que presione el igual
      return;
    }

    // Manejo de operadores repetidos: Si el último carácter ya es un operador, lo reemplazamos
    if (operadores.includes(char)) {
      setDisplayValue((prev) => {
        const ultimoCaracter = prev.slice(-1);
        if (operadores.includes(ultimoCaracter)) {
          return prev.slice(0, -1) + char;
        }
        return prev + char;
      });
      setIsResultCalculated(false);
      return;
    }

    // Operaciones y números básicos
    if (displayValue === '0' && char !== '.' && !operadores.includes(char) && !isResultCalculated) {
      setDisplayValue(char);
      return;
    }

    if (isResultCalculated) {
      setDisplayValue(char);
      setIsResultCalculated(false);
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

  // 4. Calcular el resultado final (Únicamente al presionar el botón =)
  const calcular = () => {
    try {
      let valorLimpio = displayValue;
      const operadores = ['+', '-', '×', '÷', '%'];
      
      // Si la expresión termina en un operador sobrante, lo quitamos antes de calcular
      if (operadores.includes(valorLimpio.slice(-1))) {
        valorLimpio = valorLimpio.slice(0, -1);
      }

      let expresion = valorLimpio
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/%/g, '/100')
        .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')
        .replace(/\(([^)]+)\)\^2/g, 'Math.pow($1, 2)')
        .replace(/log\(([^)]+)\)/g, 'Math.log10($1)')
        .replace(/ln\(([^)]+)\)/g, 'Math.log($1)')
        .replace(/sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
        .replace(/cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
        .replace(/tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');

      const resultado = new Function(`return ${expresion}`)();

      if (isNaN(resultado) || !isFinite(resultado)) {
        setDisplayValue('Error');
        return;
      }

      setFormula(valorLimpio);
      setDisplayValue(String(Number(resultado.toFixed(6))));
      setIsResultCalculated(true);
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