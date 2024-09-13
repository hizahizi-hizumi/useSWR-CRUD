import useSWR from "swr"

import { setupMsw } from "./mocks/setupMsw"

setupMsw()

async function fetcher(url: string) {
  const response = await fetch(url)
  const result = await response.json()

  return result
}

function App() {
  const { data } = useSWR("/hello", fetcher)
  return (
    <>
      {data}
    </>
  )
}

export default App
