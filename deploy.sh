#!/bin/bash

# Change to your web directory
cd isabellafelaco.com

# Pull changes from GitHub repository
git pull origin main

# Optionally, install dependencies and build assets
yarn install

# Restart services if necessary
# systemctl restart your_service_name

# Optionally, set permissions
# chmod -R 755 /path/to/your/web/directory

# Optionally, add a message to indicate successful deployment
echo "Deployment completed successfully"
