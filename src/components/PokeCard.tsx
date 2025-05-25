import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './PokeCard.styles';

export default function PokeCard({ pokemon }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (pokemon?.name) {
      console.log(`Pokémon ${pokemon.name} carregado com sucesso!`);
    }
  }, [pokemon]);

  if (!pokemon || !pokemon.name) return null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
   
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {isFavorite ? '⭐ ' : ''}{pokemon.name.toUpperCase()}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: pokemon.sprites.front_default }}
      />
      <Text>Altura: {pokemon.height}</Text>
      <Text>Peso: {pokemon.weight}</Text>
      <Text>Tipos: {pokemon.types.map(t => t.type.name).join(', ')}</Text>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favButton}>
        <Text style={styles.favText}>
          {isFavorite ? 'Desfavoritar' : 'Favoritar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
