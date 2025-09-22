import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterCard } from "../components/CharacterCard";

export const HomeScreen = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Text style={styles.message}>Cargando personajes...</Text>;
  if (error) return <Text style={styles.message}>{error}</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            id={item.id!} name={item.name} image={item.image} height={item.height} mass={item.mass} gender={item.gender} birth_year={item.birth_year}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "gray",
  },
  message: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    justifyContent: "center",
    padding: 10,
  },
});
