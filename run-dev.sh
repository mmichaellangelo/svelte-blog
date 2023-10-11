#!/bin/bash

# Run the backend app

cd backend/
docker compose up -d

cd ../frontend/
npm run dev
