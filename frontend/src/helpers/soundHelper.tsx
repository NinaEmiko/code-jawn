export const playCorrectSound = () => {
    const audio = new Audio('../../../../../public/sounds/achievement-sound-effect.mp3');
    audio.play().catch(error => console.error('Error playing sound:', error));
  };

export const playIncorrectSound = () => {
    const audio = new Audio('../../../../../public/sounds/incorrect-answer-sound-effect.mp3');
    audio.play().catch(error => console.error('Error playing sound:', error));
};