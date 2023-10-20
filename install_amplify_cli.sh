#!/bin/bash

echo "Installing the AWS Amplify CLI..."
npm install -g @aws-amplify/cli

if [ $? -eq 0 ]; then
  echo "AWS Amplify CLI installed successfully."
  amplify configure
else
  echo "Failed to install the AWS Amplify CLI."
  exit 1
fi
