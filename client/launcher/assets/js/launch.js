const {
    ipcRenderer
} = require("electron");

function launch() {
    let proxyDetails, accountDetails;
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var fontSize = document.getElementById("fontSize").value
    var screenSize = document.getElementById("screenSize").value
    var proxyInfo = document.getElementById("selectProxyList").value.toString()
    var savedAccountInfo = document.getElementById("selectAccountList").value.toString()
    var screenDefinition = 0


    var wideScreen = document.getElementById("wideScreenCheckbox").checked

    if (wideScreen == 1) {
        screenDefinition = 1
    } else {
        screenDefinition = 0
    }

    sizes = screenSize.split("/")

    var loginDetails = {
        scaleUp: sizes[0],
        scaleDown: sizes[1],
        screenDefinition: screenDefinition,
        fontSize: fontSize,
        proxy: "",
        username: username,
        password: password,
    }




    if (proxyInfo != "auto") {
        //read from proxies.json
        var file = path.join(__dirname, 'assets/JSON/proxies.json');

        var JSONProxies = fs.readFileSync(file, 'utf8');


        var JSONProxies = JSON.parse(JSONProxies)
        console.log(JSONProxies)

        proxyInfo = proxyInfo.split(":")
        for (key in JSONProxies) {
            if (JSONProxies[key]["proxyIp"] == proxyInfo[0] && JSONProxies[key]["proxyPort"] == proxyInfo[1]) {
                proxyDetails = JSONProxies[key]

            }
        }

        if (proxyDetails["proxyUsername"] == "" || proxyDetails["proxyUsername"] == null) {
            proxyDetails = proxyDetails["proxyIp"] + ":" + proxyDetails["proxyPort"]
        } else {
            proxyDetails = proxyDetails["proxyIp"] + ":" + proxyDetails["proxyPort"] + ":" + proxyDetails["proxyUsername"] + ":" + proxyDetails["proxyPassword"]
        }


    } else {
        proxyDetails = "none"

    }

    loginDetails["proxy"] = proxyDetails



    if (savedAccountInfo != "auto") {

        file = path.join(__dirname, 'assets/JSON/accounts.json');

        var JSONAccounts = fs.readFileSync(file, 'utf8');


        var accountsParsed = JSON.parse(JSONAccounts)

        for (key in accountsParsed) {
            if (accountsParsed[key]["username"] == savedAccountInfo) {
                accountDetails = accountsParsed[key]
            }
        }

        loginDetails["username"] = accountDetails["username"]
        loginDetails["password"] = accountDetails["password"]



    }



    ipcRenderer.send("launchClient", loginDetails)


}