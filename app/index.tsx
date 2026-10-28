import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import CustomText from '../components/CustomText';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';
import { useCalculator } from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const { formula, displayValue, escribir, borrar, limpiar, calcular } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.badge}>
          <CustomText style={{ fontSize: 20 }}>🐾</CustomText>
        </View>
        <CustomText style={styles.title}>Peanuts</CustomText>
      </View>

      <Display formula={formula} displayValue={displayValue} />

      <ButtonGrid
        onWrite={escribir}
        onClear={limpiar}
        onDelete={borrar}
        onCalculate={calcular}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBF0',
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 35, paddingHorizontal: 5 },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#D87093',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 22, fontWeight: '800', color: '#D87093', letterSpacing: 0.5 },
});