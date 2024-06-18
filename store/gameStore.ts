import {create} from 'zustand';

type GameState = {
  selectedGame: string;
  setSelectedGame: (game: string) => void;
  correctMap: string;
  setCorrectMap: (map: string) => void;
};

export const useGameStore = create<GameState>((set) => ({
  selectedGame: '',
  setSelectedGame: (game) => set({ selectedGame: game }),
  correctMap: '',
  setCorrectMap: (map) => set({ correctMap: map }),
}));
