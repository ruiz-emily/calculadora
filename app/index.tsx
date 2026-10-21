import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import CustomText from '../components/CustomText';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';

export default function CalculatorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <View style={styles.badge}>
          <CustomText style={{ fontSize: 18 }}>🐾</CustomText>
        </View>
        <CustomText style={styles.title}>Peanuts</CustomText>
      </View>

      {/* Componente Display */}
      <Display subText="30,820 + 9,205" mainText="40,025" />

      {/* Componente Rejilla de Botones */}
      <ButtonGrid />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  badge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D87093',
    letterSpacing: 0.5,
  },
});