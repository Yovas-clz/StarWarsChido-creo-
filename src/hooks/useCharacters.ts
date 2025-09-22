import { useEffect, useState } from "react";
import { Character } from "../interfaces/character";
import { characterImages, placeholder } from "../utils/image";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        const formatted: Character[] = data.results.map((item: any, index: number) => {
          const id = index + 1;
          return {...item,id:index + 1,image: characterImages[id] ? characterImages[id] : placeholder,
          };
        });
        setCharacters(formatted);
        setLoading(false);
      } catch (err) {
        setError("perdon pero no carga, sorry :(");
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
};
