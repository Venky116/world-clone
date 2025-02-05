const Game = () => {
    const [targetWord] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState("");
    const [gameStatus, setGameStatus] = useState("playing"); // "playing", "won", "lost"
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (currentGuess.length === 5) {
        if (currentGuess === targetWord) {
          setGameStatus("won");
        } else if (guesses.length + 1 === 6) {
          setGameStatus("lost");
        }
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess("");
      }
    };
  
    const resetGame = () => {
      setGuesses([]);
      setCurrentGuess("");
      setGameStatus("playing");
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Wordle Clone</h1>
        {gameStatus === "won" && <p className="text-green-500 mb-4">You won!</p>}
        {gameStatus === "lost" && <p className="text-red-500 mb-4">You lost! The word was {targetWord}</p>}
        <div className="grid gap-2">
          {guesses.map((guess, index) => (
            <div key={index} className="flex gap-2">
              {guess.split("").map((letter, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 flex items-center justify-center border rounded ${
                    checkGuess(guess, targetWord)[i] === "green"
                      ? "bg-green-500"
                      : checkGuess(guess, targetWord)[i] === "yellow"
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
            maxLength={5}
            className="border rounded p-2"
          />
          <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
        <button onClick={resetGame} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
          New Game
        </button>
      </div>
    );
  };