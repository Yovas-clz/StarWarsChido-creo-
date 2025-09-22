import { Character } from "../interfaces/character";

export const fetchCharacters = async (): Promise<Character[]> => {
    const response = await fetch("https://swapi.dev/api/people/");
    if (!response.ok) {
        throw new Error("Error al cargar el personaje");
    }
    const data = await response.json();
    return data.results;
};