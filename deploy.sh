#!/usr/bin/env sh

set -e

yarn build

pm2 start pm2.json

 "🎉 🔥 Congratulations, Deploy Test Env Success, Go to http://10.179.147.57:8001"
