export const shuffleArray = (array) => {
  const arrayClone = [...array];
  let currentIdx = arrayClone.length;
  let tmpVal = null;
  let randomIdx = null;

  while (currentIdx > 0) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;
    tmpVal = arrayClone[currentIdx];
    arrayClone[currentIdx] = arrayClone[randomIdx];
    arrayClone[randomIdx] = tmpVal;
  }

  return arrayClone;
};
