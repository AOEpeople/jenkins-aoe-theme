#!/usr/bin/env bash

npm install

cd node_modules/jenkins-material-theme && npm install && cd ../../

grunt

