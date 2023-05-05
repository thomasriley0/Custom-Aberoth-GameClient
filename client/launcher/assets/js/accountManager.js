var file = path.join(__dirname, 'assets/JSON/accounts.json');

function toggleAccountManager() {
    document.getElementById("launcherFlex").classList.toggle("hidden")
    document.getElementById("accountManager").classList.toggle("hidden")
}

function populateAccountSelectList() {

    fs.readFile(file, "utf8", (err, JSONAccounts) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        var accounts = JSON.parse(JSONAccounts)

        var JSONAccountsLength = Object.keys(JSONAccounts).length

        accountSelect = document.getElementById("selectAccountList");
        deleteAccountSelect = document.getElementById("deleteAccountList");


        var i, L = accountSelect.options.length;
        for (i = L; i >= 1; i--) {
            accountSelect.remove(i);
        }


        var i, L = deleteAccountList.options.length;
        for (i = L; i >= 1; i--) {
            deleteAccountList.remove(i);
        }


        if (accounts != "" && accounts != null) {
            for (key in accounts) {
                var option = document.createElement("option");
                var option1 = document.createElement("option");

                option.text = option.value = accounts[key]["username"];
                option1.text = option1.value = accounts[key]["username"];
                accountSelect.add(option);
                deleteAccountSelect.add(option1);


            }

        }

    })

}



function deleteAccount() {
    //read from proxies.json
    fs.readFile(file, "utf8", (err, accountsJSON) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        var accountsParsed = JSON.parse(accountsJSON)

        var accountSelected = document.getElementById("deleteAccountList").value;
        if (accountSelected != "auto") {
            var accountSelectedInfo = accountSelected;

            for (key in accountsParsed) {
                if (accountsParsed[key]["username"] == accountSelectedInfo) {
                    accountsParsed.splice(key, 1);

                }
            }

            const jsonString = JSON.stringify(accountsParsed)

            fs.writeFile(file, jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    populateAccountSelectList()
                }
            })


        }
    })

}

function addAccount() {
    var username = document.getElementById("managerUsername").value
    var password = document.getElementById("managerPassword").value
    var duplicate = false


    fs.readFile(file, "utf8", (err, accountsJSON) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        var accountsParsed = JSON.parse(accountsJSON)
        var accountsJSONLength = Object.keys(accountsParsed).length

        if (username != "" && password != "") {

            var accountDetails = {
                username: username,
                password: password
            }
            //check if accontDetails is a dupe

            if (accountsParsed != "" && accountsParsed != null) {
                for (key in accountsParsed) {
                    if (accountsParsed[key]["username"] == username && accountsParsed[key]["password"] != password) {
                        duplicate = true
                        break;
                    }
                }
            }


            // If not dupe, add to list
            if (duplicate != true) {

                accountsParsed[accountsJSONLength] = accountDetails
                const jsonString = JSON.stringify(accountsParsed)

                fs.writeFile(file, jsonString, err => {
                    if (err) {
                        console.log('Error writing file', err)
                    } else {
                        populateAccountSelectList()
                    }
                })

                document.getElementById("managerUsername").value = null
                document.getElementById("managerPassword").value = null

            }
        }

    })
}


populateAccountSelectList()