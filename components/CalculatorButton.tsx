import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface CalculatorButtonProps {
  label: string;
  isOperator?: boolean;
  isSpecial?: boolean;
  flex?: number;
}

export default function CalculatorButton({
  label,
  isOperator = false,
  isSpecial = false,
  flex = 1,
}: CalculatorButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isSpecial && styles.specialButton,
        { flex },
      ]}
      activeOpacity={0.8}
    >
      <CustomText style={[styles.buttonText, (isOperator || isSpecial) && styles.actionButtonText]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D87093',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  operatorButton: {
    backgroundColor: '#FFB6C1',
  },
  specialButton: {
    backgroundColor: '#FADADD',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#5A4A42',
  },
  actionButtonText: {
    color: '#FFF',
  },
});