"use strict";
let customers = Array();
function save(event) {
    event.preventDefault();
    let newCustomer = new Customer();
    console.log(newCustomer);
    newCustomer.name = getElementById("nazwaFirmy").value;
    newCustomer.taxId = getElementById("NIP").value;
    newCustomer.city = getElementById("miasto").value;
    newCustomer.street = getElementById("ulica").value;
    newCustomer.houseNumber = getElementById("numerDomu").value;
    newCustomer.roomNumber = getElementById("numerDomu").value;
    newCustomer.postalCode = getElementById("kodPocztowy").value;
    newCustomer.comments = getElementById("uwagi").value;
    newCustomer.field = getElementById("branża").value;
    newCustomer.isActive = getElementById("btncheck1").checked;
    // lock()
    saveUser(newCustomer);
    showList();
}
function getElementById(elementId) {
    return document.getElementById(elementId);
}
function saveUser(newCustomer) {
    for (let i in customers) {
        if (customers[i].taxId == newCustomer.taxId) {
            customers[i] = newCustomer;
            console.log("overwritten customer");
            return 0;
        }
    }
    customers.push(newCustomer);
    console.log("saved new customer");
    return 1;
}
function edit(taxId) {
    showForm();
}
function lock() {
    getElementById("nazwaFirmy").disabled = true,
        getElementById("NIP").disabled = true,
        getElementById("miasto").disabled = true,
        getElementById("ulica").disabled = true,
        getElementById("numerDomu").disabled = true,
        getElementById("numerMieszkania").disabled = true,
        getElementById("kodPocztowy").disabled = true,
        getElementById("uwagi").disabled = true,
        getElementById("branża").disabled = true,
        getElementById("btncheck1").disabled = true;
}
function showForm() {
    getElementById("client-form").style.display = "block";
    getElementById("client-list").style.display = "none";
}
function showList() {
    loadList();
    getElementById("client-form").style.display = "none";
    getElementById("client-list-container").style.display = "block";
}
function loadList() {
    emptyList();
    let ul = document.getElementById("client-list");
    console.log(customers);
    if (!ul) {
        return;
    }
    for (let i in customers) {
        ul.innerHTML += `<li class="list-group-item customer-list-item" onclick="edit(${customers[i].taxId})">${customers[i].getData()}</li>`;
    }
}
function emptyList() {
    $('.customer-list-item').remove();
}
