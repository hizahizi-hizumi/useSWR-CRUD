import { Button } from "@mui/material"

import { setupMsw } from "@/mocks/setupMsw"

setupMsw()

function App() {
  return (
    <>
      <Button>hoge</Button>
    </>
  )
}

export default App
