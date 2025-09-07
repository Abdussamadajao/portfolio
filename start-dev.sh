#!/bin/bash

echo "🚀 Starting Portfolio Development Environment..."
echo ""

# Start the backend server in the background
echo "📡 Starting backend server on port 5000..."
npm run dev:server &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Start the frontend client
echo "🌐 Starting frontend client on port 5173..."
npm run dev &
CLIENT_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo "📡 Backend: http://localhost:5000"
echo "🌐 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $SERVER_PID 2>/dev/null
    kill $CLIENT_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
