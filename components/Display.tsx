import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface DisplayProps {
  formula: string;
  displayValue: string;
}

export default function Display({ formula, displayValue }: DisplayProps) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.formulaText}>{formula}</CustomText>
      <CustomText style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {displayValue}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 28,
    marginVertical: 12,
    borderWidth: 1.5,
    borderColor: '#FFD1DC',
  },
  formulaText: { fontSize: 18, color: '#B08898', marginBottom: 6, fontWeight: '500' },
  displayText: { fontSize: 44, fontWeight: '700', color: '#4A3E3D' },
});