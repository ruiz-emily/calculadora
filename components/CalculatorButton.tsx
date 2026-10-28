import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  isOperator?: boolean;
  isSpecial?: boolean;
  isAccent?: boolean;
  flex?: number;
}

export default function CalculatorButton({
  label,
  onPress,
  isOperator = false,
  isSpecial = false,
  isAccent = false,
  flex = 1,
}: CalculatorButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isSpecial && styles.specialButton,
        isAccent && styles.accentButton,
        { flex },
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <CustomText style={[styles.buttonText, (isOperator || isAccent) && styles.actionButtonText]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 68,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#D87093',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  operatorButton: { backgroundColor: '#FFB6C1' },
  specialButton: { backgroundColor: '#FCE4EC' },
  accentButton: { backgroundColor: '#E91E63' },
  buttonText: { fontSize: 22, fontWeight: '600', color: '#4A3E3D' },
  actionButtonText: { color: '#FFFFFF', fontWeight: '700' },
});