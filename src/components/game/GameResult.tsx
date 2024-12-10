interface GameResultProps {
  result: string | null;
}

export function GameResult({ result }: GameResultProps) {
  if (!result) return null;

  const isCorrect = result.includes('Correct');
  
  return (
    <div className={`text-center text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
      {result}
    </div>
  );
}