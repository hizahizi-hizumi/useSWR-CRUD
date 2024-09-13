import useSWR from "swr"

import { setupMsw } from "./mocks/setupMsw"
import type { Task } from "./types/task"

setupMsw()

async function fetcher(url: string) {
  const response = await fetch(url)
  const result = await response.json()

  return result
}

function App() {
  const { data } = useSWR("/tasks", fetcher)
  return (
    <>
      {data && data.map((task: Task) => { return <div key={task.id}>{task.title}</div> })}
    </>
  )
}

export default App
