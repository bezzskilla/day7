const Main = ({ setCount }) => {
  const incrementClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <button onClick={incrementClick} >Plus one</button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
      >
        Minus one
      </button>
      <main>Main</main>
    </>
  )
}

export default Main
