import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';

interface ButtonGridProps {
  onWrite: (char: string) => void;
  onClear: () => void;
  onDelete: () => void;
  onCalculate: () => void;
}

export default function ButtonGrid({ onWrite, onClear, onDelete, onCalculate }: ButtonGridProps) {
  return (
    <View style={styles.gridContainer}>
      {/* Fila Científica 1 */}
      <View style={styles.row}>
        <CalculatorButton label="AC" onPress={onClear} isSpecial />
        <CalculatorButton label="sin" onPress={() => onWrite('sin')} isSpecial />
        <CalculatorButton label="cos" onPress={() => onWrite('cos')} isSpecial />
        <CalculatorButton label="tan" onPress={() => onWrite('tan')} isSpecial />
      </View>

      {/* Fila Científica 2 */}
      <View style={styles.row}>
        <CalculatorButton label="log" onPress={() => onWrite('log')} isSpecial />
        <CalculatorButton label="ln" onPress={() => onWrite('ln')} isSpecial />
        <CalculatorButton label="√" onPress={() => onWrite('√')} isSpecial />
        <CalculatorButton label="⌫" onPress={onDelete} isSpecial />
      </View>

      {/* Fila Científica 3 */}
      <View style={styles.row}>
        <CalculatorButton label="x²" onPress={() => onWrite('x²')} isSpecial />
        <CalculatorButton label="x³" onPress={() => onWrite('x³')} isSpecial />
        <CalculatorButton label="(" onPress={() => onWrite('(')} isSpecial />
        <CalculatorButton label=")" onPress={() => onWrite(')')} isSpecial />
      </View>

      {/* Fila Básica 7-9 y ÷ */}
      <View style={styles.row}>
        <CalculatorButton label="7" onPress={() => onWrite('7')} />
        <CalculatorButton label="8" onPress={() => onWrite('8')} />
        <CalculatorButton label="9" onPress={() => onWrite('9')} />
        <CalculatorButton label="÷" onPress={() => onWrite('÷')} isOperator />
      </View>

      {/* Fila Básica 4-6 y × */}
      <View style={styles.row}>
        <CalculatorButton label="4" onPress={() => onWrite('4')} />
        <CalculatorButton label="5" onPress={() => onWrite('5')} />
        <CalculatorButton label="6" onPress={() => onWrite('6')} />
        <CalculatorButton label="×" onPress={() => onWrite('×')} isOperator />
      </View>

      {/* Fila Básica 1-3 y - */}
      <View style={styles.row}>
        <CalculatorButton label="1" onPress={() => onWrite('1')} />
        <CalculatorButton label="2" onPress={() => onWrite('2')} />
        <CalculatorButton label="3" onPress={() => onWrite('3')} />
        <CalculatorButton label="-" onPress={() => onWrite('-')} isOperator />
      </View>

      {/* Fila Final 0, ., +, = */}
      <View style={styles.row}>
        <CalculatorButton label="0" onPress={() => onWrite('0')} />
        <CalculatorButton label="." onPress={() => onWrite('.')} />
        <CalculatorButton label="+" onPress={() => onWrite('+')} isOperator />
        <CalculatorButton label="=" onPress={onCalculate} isAccent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: { gap: 8 },
  row: { flexDirection: 'row', gap: 8 },
});