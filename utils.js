export const checkGuess = (guess, target) => {
    const result = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === target[i]) {
        result.push("green"); 
      } else if (target.includes(guess[i])) {
        result.push("yellow"); 
      } else {
        result.push("gray"); 
      }
    }
    return result;
  };