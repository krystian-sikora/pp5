"use strict";
class Customer {
    constructor() {
        this.name = "";
        this.taxId = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.roomNumber = "";
        this.postalCode = "";
        this.comments = "";
        this.field = "";
        this.isActive = false;
    }
    getAddress() {
        return `${this.street} ${this.houseNumber}/${this.roomNumber}, ${this.city} ${this.postalCode}`;
    }
    getData() {
        return `${this.name} \n${this.taxId} \n${this.getAddress()}`;
    }
}
class Supplier extends Customer {
    constructor(accNumber) {
        super();
        this.invoices = [];
        this.accNumber = accNumber;
    }
}
class Invoice {
    constructor() {
        this.name = "";
        this.quantity = 0;
    }
}
var Unit;
(function (Unit) {
    Unit[Unit["szt"] = 0] = "szt";
    Unit[Unit["kg"] = 1] = "kg";
    Unit[Unit["g"] = 2] = "g";
    Unit[Unit["l"] = 3] = "l";
})(Unit || (Unit = {}));
var Tax;
(function (Tax) {
    Tax["osiem"] = "8%";
    Tax["dwadziesciaTrzy"] = "23%";
})(Tax || (Tax = {}));
