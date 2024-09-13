import useSWR from "swr"

async function fetcher(url: string) {
  const response = await fetch(url)
  const result = await response.json()

  return result
}

function App() {
  const { data } = useSWR("https://jsonplaceholder.typicode.com/todos/1", fetcher)
  return (
    <>
      {data.title}
    </>
  )
}

export default App
