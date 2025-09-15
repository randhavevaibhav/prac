import { useFetch } from "./useFetch";

const CustomFetch = () => {
  const { data, isError, isLoading, error, refetch } = useFetch({
    url: "https://pokeapi.co/api/v2/pokemon",
  });

  if (isError) {
    console.log("error ==> ", error);
    return <p>Error </p>;
  }
  if (isLoading) {
    return <p>Loading .... </p>;
  }
  if (!data) {
    return <p>No Data found</p>;
  }

  const pokemons = data?.results;
  return (
    <div>
      <h2>Custom Fetch</h2>
      <ul className="overflow-y-auto">
        {pokemons.map((pokemon, i) => {
          return <li key={i}>{pokemon.name}</li>;
        })}
      </ul>

      <button
        onClick={refetch}
        className="bg-blue-500 text-white font-semibold rounded px-4 py-2"
      >
        Refetch
      </button>
    </div>
  );
};

export default CustomFetch;
