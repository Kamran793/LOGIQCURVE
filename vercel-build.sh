#!/bin/bash
corepack enable
corepack prepare pnpm@8.15.4 --activate
pnpm install
pnpm run build
