import React from 'react';
import { Text, TextStyle, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export default function CustomText({ children, style, ...props }: CustomTextProps) {
  return (
    <Text style={[{ fontFamily: 'System', color: '#4A3E3D' }, style]} {...props}>
      {children}
    </Text>
  );
}