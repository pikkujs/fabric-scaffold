#!/bin/bash
set -e

export API_PORT="${API_PORT:-4000}"
export APP_PORT="${APP_PORT:-5173}"
export CONSOLE_PORT="${CONSOLE_PORT:-51442}"
export MCP_PORT="${MCP_PORT:-3001}"

cd /workspace/project

# If custom functions are mounted, copy them in and regenerate
if [ -d "/workspace/functions" ]; then
  echo "[entrypoint] Loading custom functions..."
  cp -r /workspace/functions/* packages/functions/
  npx pikku all 2>/dev/null || true
fi

echo "[entrypoint] Starting services..."
echo "  API: http://0.0.0.0:${API_PORT}"
echo "  App: http://0.0.0.0:${APP_PORT}"

exec "$@"
