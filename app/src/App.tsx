import { useRef } from 'react'
import { PikkuAgentChat } from '@pikku/assistant-ui'

function App() {
  const threadIdRef = useRef(crypto.randomUUID())

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid #eee',
          fontWeight: 600,
        }}
      >
        Agent
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <PikkuAgentChat
          api={import.meta.env.VITE_API_URL ?? 'http://localhost:4002/rpc/agent'}
          agentName="routerAgent"
          threadId={threadIdRef.current}
          resourceId="default"
          emptyMessage="Chat with the Agent agent."
        />
      </div>
    </div>
  )
}

export default App
