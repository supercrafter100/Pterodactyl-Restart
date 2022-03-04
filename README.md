# Pterodactyl-Restart
A github action to automatically restart a pterodactyl panel

## Why?

Some people use pterodactyl to host their discord bots. If you want to always have the latest release running automatically, you can set up your server on pterodactyl to automatically download the latest files from github when restarting. This action will enable you to force a restart when you publish to your repository.

## Example
```
name: Test

on:
  push:
    branches:
      - master

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ./
        with:
          PTE_PANEL_URL: 'https://panel.example.com'
          PTE_BEARER_TOKEN: ${{ secrets.PTE_BEARER_TOKEN }}
          PTE_PANEL_ID: ${{ secrets.PTE_PANEL_ID }}
```

## Variables

| PTE_PANEL_URL    	| The url to your pterodactyl panel. Make sure it doesn't end with "/" as it will break.                                                                  	|
|------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------	|
| PTE_BEARER_TOKEN 	| The api token you generated for your account. You can create one at `https://panel.example.com/account/api`                                     	|
| PTE_PANEL_ID     	| The ID of the server you want to restart. You can find this in the url when viewing a server Ex: `https://panel.example.com/server/19afbc48`, `19afbc48` will be the ID 	|
