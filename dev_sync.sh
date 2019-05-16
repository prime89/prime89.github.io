#!/bin/bash

DIR=project
rm -rf dist
npm run build

wait

rsync -r --exclude node_modules . fe@193.112.97.65:$DIR