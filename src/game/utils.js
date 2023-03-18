export  const shuffle = (cards) => {
  let shuffled = [...cards].sort(() => Math.random() - 0.5)
  return shuffled
}