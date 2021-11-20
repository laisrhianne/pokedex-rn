import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { Container, Title } from './styles.js';

import api from '../../services/api';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  const navigation = useNavigation();

  async function getData() {
    const response = await api.get('pokemon', { params: { limit: 150 } });
    if (response.data && response.data.results) {
      const pokemonData = response.data.results.map((data) => ({
        ...data,
        id: data.url.split('pokemon/')[1].replace('/', ''),
      }));
      setPokemons(pokemonData);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Title>Ir para página de Detalhes</Title>
      </TouchableOpacity>
    </Container>
  );
}
