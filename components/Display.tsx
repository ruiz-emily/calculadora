import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface DisplayProps {
  subText: string;
  mainText: string;
}

export default function Display({ subText, mainText }: DisplayProps) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.subText}>{subText}</CustomText>
      <CustomText style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {mainText}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 24,
    marginVertical: 15,
  },
  subText: {
    fontSize: 20,
    color: '#B08898',
    marginBottom: 5,
  },
  displayText: {
    fontSize: 48,
    fontWeight: '600',
    color: '#4A3E3D',
  },
});