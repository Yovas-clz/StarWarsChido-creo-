import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { placeholder } from "../utils/image";

interface CharacterCardProps {
  id: number;
  name: string;
  image: any;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
}

export const CharacterCard = ({
  id,name,image,height,mass,gender,birth_year,
}: CharacterCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image ? image : placeholder} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      {height && <Text style={styles.info}>Altura: {height} cm</Text>}
      {mass && <Text style={styles.info}>Peso: {mass} kg</Text>}
      {gender && <Text style={styles.info}>Género: {gender}</Text>}
      {birth_year && <Text style={styles.info}>Nacimiento: {birth_year}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  info: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});

