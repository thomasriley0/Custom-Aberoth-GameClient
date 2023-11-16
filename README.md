# Custom-Aberoth-GameClient
A custom game client for popular MMORPG game Aberoth. The client features a launcher with HTTP proxy support and a game client that features custom scripts.

The game client is developed with the framework Electron and built with the package electron-builder.

To setup the client
1. `git clone https://github.com/thomasriley0/Custom-Aberoth-GameClient.git`
2. `cd Custom-Aberoth-GameClient` 
3. `npm install`
4. Run dev script or build script

To build the game client for Windows x64:
`npm run distWindows`


To build the game client for Mac Intel CPU:
`npm run distIntelMac`


To build the game client for Mac M1 CPU:
 `npm run distMacM1`


After building the app, navigate the /dir folder and run the .exe that was built.



Development Users: To run the game client from terminal for development use
`npm run start`

I also developed a module using a computer vision library opencv.js to determine the players location by template matching the current picture of our game in a large image. You can find that module [here](https://github.com/thomasriley0/Computer-Vision-Experiment)


Images of the client

![dd48e75d41ca36dca7d3053b72731e57](https://user-images.githubusercontent.com/129229020/236358904-263ddb44-c49f-41c7-aea2-e3fe94ca679a.png)

![47ba98aab6099a81c56692f2580ca1c5](https://user-images.githubusercontent.com/129229020/236358915-75a029aa-2d52-4b9c-b23a-72449289f5bb.png)
