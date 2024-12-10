import { useSearchParams } from 'react-router-dom';
import { GameCreator } from './components/GameCreator';
import { GamePlayer } from './components/GamePlayer';

function App() {
  const [searchParams] = useSearchParams();
  const gameId = searchParams.get('game');

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🎄 Christmas Emoji Guessing Game 🎅
        </h1>
        
        {gameId ? <GamePlayer gameId={gameId} /> : <GameCreator />}
      </div>
    </div>
  );
}

export default App;