var username;
var password;
var scaleup;
var scaledown;
var fontsize;
var screendefinition;
var javaversion;
var proxy;
var datacookies = [];

loginInterval = window.setInterval(login, 100)

function login() {
    if (proxy != "" || proxy != null) {
        window.autoLoad = {
        username: username,
        password: password,
        scaleup: scaleup,
        scaledown: scaledown,
        encryptpassword: 0,
        screendefinition: screendefinition,
        ipaddress: "192.99.201.128",
        fontsize: 14,
    };

     app = new App(proxy)
     
    var file = path.join(__dirname, 'assets/cookies.json');
    var JSONCookies = fs.readFileSync(file, 'utf8');
    JSONCookies = JSON.parse(JSONCookies);
    var JSONCookiesLength = Object.keys(JSONCookies).length



    if (datacookies.length != 0 && username != "") {
      var found = false;
      for (key in JSONCookies) {
        if (JSONCookies[key]["username"] == username.toLowerCase()) {
          JSONCookies[key]["cookie"] = datacookies.join("".toString());
          found = true;
          break;
        }
      }

      if (!found) {
        JSONCookies[JSONCookiesLength] = {"username": username.toLowerCase(), "cookie": datacookies.join("".toString())}
      }
    }
    
    const jsonString = JSON.stringify(JSONCookies)

    fs.writeFileSync(file, jsonString)

     clearInterval(loginInterval)
    }
   
}



var sessionActive = true;

setInterval(function () {
  sessionActive = true;
  var onScreenMessage = app.game.onScreenMessage
  try {
    //check text on screen
    if (onScreenMessage == "Press R to respawn, or Q to quit to the main menu.") {
      sessionActive = false;
    }

  } catch {
    sessionActive = false;
  }
}, 20);

//press r to respawn handler when session is no longer active
window.addEventListener("keydown", function (event) {
    if (event.key == "r" || event.key == "R") {
      if (!sessionActive) {
        login();
      }
    }
  });


  //press q to respawn handler when session is no longer active
window.addEventListener("keydown", function (event) {
    if (event.key == "q" || event.key == "Q") {
      if (!sessionActive) {
        ipcRenderer.send("logout")
        
      }
    }
  });
