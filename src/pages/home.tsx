
export default function Home() {
  const handleSearch = () => {
    fetch("http://10.24.31.35:3333")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log("Data:", data))
      
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSearch}>Testar</button>
    </div>
  );
}
