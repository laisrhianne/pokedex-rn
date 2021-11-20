import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import { Container, Title, ImageContainer, Image } from './styles.js';

export default function Details() {
  const [pokemonData, setPokemonData] = useState({});
  const [loadingData, setLoadingData] = useState(false);

  const route = useRoute();
  const item = route.params && route.params.item;
  const id = item && item.id;

  async function getPokemonData() {
    setLoadingData(true);
    const response = await api.get(`pokemon/${id}`);
    setPokemonData(response.data);
    console.log(response.data.sprites);
    setLoadingData(false);
  }

  useEffect(() => {
    getPokemonData();
  }, [route.params]);

  return loadingData || !id ? (
    <ActivityIndicator size='large' color='#FF0000' style={{ marginTop: 10 }} />
  ) : (
    <Container>
      {pokemonData &&
      pokemonData.sprites &&
      pokemonData.sprites.front_default ? (
        <ImageContainer>
          <Image source={{ uri: pokemonData.sprites.front_default }} />
          <Title>{pokemonData.name}</Title>
          <Title>Peso: {pokemonData.weight}</Title>
        </ImageContainer>
      ) : null}
    </Container>
  );
}
