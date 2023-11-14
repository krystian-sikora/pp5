
let customers = Array()

function save(event) {
    event.preventDefault()

    let newCustomer = new Customer()

    console.log(newCustomer)

    newCustomer.name = document.getElementById("nazwaFirmy").value
    newCustomer.taxId = document.getElementById("NIP").value
    newCustomer.city = document.getElementById("miasto").value
    newCustomer.street = document.getElementById("ulica").value
    newCustomer.houseNumber = document.getElementById("numerDomu").value
    newCustomer.roomNumber = document.getElementById("numerDomu").value
    newCustomer.postalCode = document.getElementById("kodPocztowy").value
    newCustomer.comments = document.getElementById("uwagi").value
    newCustomer.field = document.getElementById("branża").value
    newCustomer.isActive = document.getElementById("btncheck1").checked

    console.log(newCustomer)

    lock()
    if (userExists(newCustomer)) {
        customers.find().push(newCustomer)
        console.log("exists")
    } else {
        customers.push(newCustomer)
        console.log(customers)
    }
}

function userExists(newCustomer) {
    for (let i in customers) {
        if (customers[i].taxId == newCustomer.taxId) {
            return true
        }
    }
    return false
}

function edit(taxId) {
    showForm()
}

function lock() {
    document.getElementById("nazwaFirmy").disabled = true,
    document.getElementById("NIP").disabled = true,
    document.getElementById("miasto").disabled = true,
    document.getElementById("ulica").disabled = true,
    document.getElementById("numerDomu").disabled = true,
    document.getElementById("numerMieszkania").disabled = true,
    document.getElementById("kodPocztowy").disabled = true,
    document.getElementById("uwagi").disabled = true,
    document.getElementById("branża").disabled = true,
    document.getElementById("btncheck1").disabled = true
}

function showForm() {
    document.getElementById("client-form").style.display = "block";
    document.getElementById("client-list").style.display = "none";
}

function showList() {
    loadList()

    document.getElementById("client-form").style.display = "none";
    document.getElementById("client-list").style.display = "block";
}

function loadList() {
    let ul = document.getElementById("customer-list");
    console.log(customers)
    for (let i in customers) {
        ul.innerHTML += `<li class="list-group-item" onclick="edit(${customers[i].taxId})">${customers[i].getData()}</li>`
    }
}


