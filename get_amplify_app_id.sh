#!/bin/bash

app_name="${{ github.event.pull_request.head.ref }}"

# Create a new Amplify app
amplifyAppId=$(amplify apps create --name "$app_name" --output json --query 'App.Id' | tr -d '"')

# Get the created Amplify app by its name
appData=$(amplify apps get --appId "$amplifyAppId" --output json)

# Extract the appId from the appData
appId=$(echo "$appData" | jq -r '.App.Id')

echo "AMPLIFY_APP_ID=$appId" >> $GITHUB_ENV
