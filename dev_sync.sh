#!/bin/bash

DIR=project

rsync -r --exclude node_modules . fe@193.112.97.65:$DIR