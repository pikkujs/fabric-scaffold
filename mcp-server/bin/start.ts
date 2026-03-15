#!/usr/bin/env node

import { PikkuMCPServer } from '@pikku/modelcontextprotocol'

import { createConfig } from '../../packages/functions/src/config.js'
import { createSingletonServices } from '../../packages/functions/src/services.js'

import '#pikku/pikku-bootstrap.gen.js'
import mcpJSON from '#pikku/mcp/mcp.gen.json' with { type: 'json' }

async function main() {
  try {
    const config = await createConfig()
    const singletonServices = await createSingletonServices(config)
    const port = Number(process.env.MCP_PORT || 3001)

    const server = new PikkuMCPServer(
      {
        name: 'makeanagent-mcp-server',
        version: '1.0.0',
        mcpJSON: mcpJSON.default ?? mcpJSON,
        capabilities: {
          logging: {},
          tools: {},
          resources: {},
          prompts: {},
        },
      },
      singletonServices.logger,
    )

    await server.init()
    await server.connectHTTP({ port, path: '/mcp' })

    process.on('SIGINT', async () => {
      await server.stop()
      process.exit(0)
    })
  } catch (error) {
    console.error('Failed to start MCP server:', error)
    process.exit(1)
  }
}

main()
