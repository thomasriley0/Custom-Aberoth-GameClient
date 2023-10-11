const fs = require("fs");
const path = require('path')

document.getElementById("proxyAuthCheckbox").addEventListener("click", toggleProxyAuth)



function toggleProxyManager() {
    document.getElementById("launcherFlex").classList.toggle("hidden")
    document.getElementById("proxyManager").classList.toggle("hidden")
}

function toggleProxyAuth() {
    if (document.getElementById("proxyAuthCheckbox").checked == 1) {
        document.getElementById("proxyUsername").disabled = false
        document.getElementById("proxyPassword").disabled = false
    } else {
        document.getElementById("proxyUsername").disabled = true
        document.getElementById("proxyPassword").disabled = true
    }
}

function addProxy() {
    var ip = document.getElementById("proxyIp").value
    var port = document.getElementById("proxyPort").value
    var username = document.getElementById("proxyUsername").value
    var password = document.getElementById("proxyPassword").value
    var duplicate = false

    var file = path.join(__dirname, 'assets/JSON/proxies.json');


    //read from proxies.json
    fs.readFile(file, "utf8", (err, JSONProxies) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        var JSONProxies = JSON.parse(JSONProxies)

        var JSONProxiesLength = Object.keys(JSONProxies).length

        var usesAuth = document.getElementById("proxyAuthCheckbox").checked

        //if proxy isn't blank
        if (ip != "" && port != "") {

            // if auth is selected
            if (usesAuth == true && username != "" && password != "") {

                var proxyDetails = {
                    proxyIp: ip,
                    proxyPort: port,
                    proxyUsername: username,
                    proxyPassword: password
                }

                //check if proxyDetails is a dupe

                if (JSONProxies != "" && JSONProxies != null) {
                    for (key in JSONProxies) {
                        if (JSONProxies[key]["proxyIp"] == ip && JSONProxies[key]["proxyPort"] == port) {
                            duplicate = true
                            break;
                        }
                    }
                }

                // If not dupe, add to list
                if (duplicate != true) {

                    JSONProxies[JSONProxiesLength] = proxyDetails
                    const jsonString = JSON.stringify(JSONProxies)

                    fs.writeFile(file, jsonString, err => {
                        if (err) {
                            console.log('Error writing file', err)
                        } else {
                            populateProxySelectList()
                        }
                    })

                    document.getElementById("proxyIp").value = null
                    document.getElementById("proxyPort").value = null
                    document.getElementById("proxyUsername").value = null
                    document.getElementById("proxyPassword").value = null

                }

            }
            //if no auth is selected
            else if (usesAuth == false) {

                var proxyDetails = {
                    proxyIp: ip,
                    proxyPort: port
                }

                //check if proxyDetails is dupe

                if (JSONProxies != "" && JSONProxies != null) {
                    for (key in JSONProxies) {
                        if (JSONProxies[key]["proxyIp"] == ip && JSONProxies[key]["proxyPort"] == port) {
                            duplicate = true
                            break;
                        }
                    }


                }
                // If not dupe, add to list
                if (duplicate != true) {

                    JSONProxies[JSONProxiesLength] = proxyDetails
                    const jsonString = JSON.stringify(JSONProxies)

                    fs.writeFile(file, jsonString, err => {
                        if (err) {
                            console.log('Error writing file', err)
                        } else {
                            populateProxySelectList()
                        }
                    })

                    document.getElementById("proxyIp").value = null
                    document.getElementById("proxyPort").value = null
                    document.getElementById("proxyUsername").value = null
                    document.getElementById("proxyPassword").value = null

                }

            }

        }
    });


}


function deleteProxy() {
    var file = path.join(__dirname, 'assets/JSON/proxies.json');

    //read from proxies.json
    fs.readFile(file, "utf8", (err, proxiesJSON) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        var JSONProxies = JSON.parse(proxiesJSON)

        var proxySelected = document.getElementById("deleteProxyList").value;
        if (proxySelected != "auto") {
            var proxySelectedInfo = proxySelected.split(":")

            for (key in JSONProxies) {
                if (JSONProxies[key]["proxyIp"] == proxySelectedInfo[0] && JSONProxies[key]["proxyPort"] == proxySelectedInfo[1]) {
                    JSONProxies.splice(key, 1);

                }
            }

            const jsonString = JSON.stringify(JSONProxies)

            fs.writeFile(file, jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    populateProxySelectList()
                }
            })


        }
    })

}


function populateProxySelectList() {
    var file = path.join(__dirname, 'assets/JSON/proxies.json');


    //read from proxies.json
    fs.readFile(file, "utf8", (err, JSONProxies) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }

        var proxiesJSON = JSON.parse(JSONProxies)

        proxySelect = document.getElementById("selectProxyList");
        deleteProxySelect = document.getElementById("deleteProxyList");

        var i, L = proxySelect.options.length;
        for (i = L; i >= 1; i--) {
            proxySelect.remove(i);
        }

        var i, L = deleteProxySelect.options.length;
        for (i = L; i >= 1; i--) {
            deleteProxySelect.remove(i);
        }


        if (proxiesJSON != "" && proxiesJSON != null) {
            for (key in proxiesJSON) {
                var option = document.createElement("option");
                var option1 = document.createElement("option");
                option.text = option.value = proxiesJSON[key]["proxyIp"] + ":" + proxiesJSON[key]["proxyPort"];
                option1.text = option1.value = proxiesJSON[key]["proxyIp"] + ":" + proxiesJSON[key]["proxyPort"];
                proxySelect.add(option);
                deleteProxySelect.add(option1);

            }

        }

    })

}

populateProxySelectList()