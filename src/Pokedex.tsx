import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';
import PokeCard from './components/PokeCard';
import styles from './Pokedex.styles';

export default function Pokedex() {
  const [input, setInput] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    if (!input) return;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
      if (!res.ok) throw new Error('Pokémon não encontrado');

      const data = await res.json();
      setPokemons((prev) => [...prev, data]);
    } catch (error) {
      console.error('Erro ao buscar Pokémon:', error.message);
      Alert.alert('Erro', 'Pokémon não encontrado!');
    }
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex Melhorada</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome ou ID do Pokémon"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Buscar" onPress={fetchPokemon} />
      <ScrollView>
        {pokemons.map((pokemon, index) => (
          <PokeCard key={index} pokemon={pokemon} />
        ))}
      </ScrollView>
    </View>
  );
}
