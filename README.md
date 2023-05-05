# Custom-Aberoth-GameClient
A custom game client for popular MMORPG game Aberoth. The client features a launcher with proxy support and a game client with custom scripts.

The game client is developed with the framework Electron and built with the package electron-builder.

To setup the client
1. `git clone https://github.com/thomasriley0/Custom-Aberoth-GameClient.git smokeClient`
2. `cd smokeClient` 
3. `npm install`

To build the game client for Windows:
`npm run distWindows`


To build the game client for Mac Intel CPU:
`npm run distIntelMac`


To build the game client for Mac M1 CPU:
 `npm run distMacM1`


After building the app, navigate the /dir folder and run the .exe that was built.



Development Users: To run the game client from terminal for development use
`npm run start`
