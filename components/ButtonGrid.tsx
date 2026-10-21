import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorButton from './CalculatorButton';

export default function ButtonGrid() {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.row}>
        <CalculatorButton label="C" isSpecial />
        <CalculatorButton label="+/-" isSpecial />
        <CalculatorButton label="%" isSpecial />
        <CalculatorButton label="÷" isOperator />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="×" isOperator />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" isOperator />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" isOperator />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="0" flex={2} />
        <CalculatorButton label="." />
        <CalculatorButton label="=" isOperator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});