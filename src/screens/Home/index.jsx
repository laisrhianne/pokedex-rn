import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

import { Container } from './styles.js';

import api from '../../services/api';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  const navigation = useNavigation();

  async function getData() {
    const response = await api.get('pokemon', { params: { limit: 150 } });
    if (response.data && response.data.results) {
      const pokemonData = response.data.results.map((data) => ({
        title: data.name,
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
      {pokemons.length ? (
        <AutocompleteDropdown dataSet={pokemons} onSelectItem={(item) => navigation.navigate('Details', { item })} />
      ) : null}
    </Container>
  );
}
