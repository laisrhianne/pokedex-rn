import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

import { Container, Title } from './styles.js';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Title>Ir para página de Detalhes</Title>
      </TouchableOpacity>
    </Container>
  );
}