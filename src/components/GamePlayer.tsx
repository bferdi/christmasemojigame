import { useState, useEffect } from 'react';
import { getGame } from '../db';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { GameResult } from './game/GameResult';
import type { Game } from '../types/game';

interface GamePlayerProps {
  gameId: string;
}

export function GamePlayer({ gameId }: GamePlayerProps) {
  const [gameData, setGameData] = useState<Game | null>(null);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const loadGame = async () => {
      const game = await getGame(gameId);
      if (game) {
        setGameData(game);
      }
    };
    loadGame();
  }, [gameId]);

  const checkGuess = () => {
    if (!gameData) return;
    
    if (guess.toLowerCase() === gameData.title.toLowerCase()) {
      setResult('🎉 Correct! You got it!');
    } else {
      setResult('❌ Not quite right. Try again!');
    }
  };

  if (!gameData) {
    return <div>Loading game...</div>;
  }

  return (
    <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Guess the Christmas Title!</h2>
      
      <div className="text-4xl text-center py-6">
        {gameData.emojis}
      </div>

      <Input
        label="Your Guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />

      <Button onClick={checkGuess} className="w-full">
        Submit Guess
      </Button>

      <GameResult result={result} />
    </div>
  );
}