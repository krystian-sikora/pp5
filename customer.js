class Customer {
    constructor() {}
    name = ""
    taxId = ""
    city = ""
    street = ""
    houseNumber = ""
    roomNumber = ""
    postalCode = ""
    comments = ""
    field = ""
    isActive = false

    getAddress() {
        return `${this.street} ${this.houseNumber}/${this.roomNumber}, ${this.city} ${this.postalCode}`
    }
    
    getData() {
        return `${this.name} \n${this.taxId} \n${this.getAddress()}`
    }
}

class Supplier extends Customer {
    constructor(accNumber) {
        super()
        this.accNumber = accNumber
    }
    invoices = []
}