

export default function Search({ search, setSearch }) {
  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  return (
    <input 
      type="text" 
      value={search}
      onInput={handleInput}
    />
  )
}
