class Customer {
    constructor() {}
    name: string= ""
    taxId: string = ""
    city: string = ""
    street: string = ""
    houseNumber: string = ""
    roomNumber: string = ""
    postalCode: string = ""
    comments: string = ""
    field: string = ""
    isActive: boolean = false

    getAddress() {
        return `${this.street} ${this.houseNumber}/${this.roomNumber}, ${this.city} ${this.postalCode}`
    }
    
    getData() {
        return `${this.name} \n${this.taxId} \n${this.getAddress()}`
    }
}

class Supplier extends Customer {
    accNumber: string
    invoices: Invoice[] = []

    constructor(accNumber: string) {    
        super()
        this.accNumber = accNumber
    }
}

class Invoice {
    name: string = ""
    quantity: number = 0
    unit?: Unit
    netto?: number
    tax?: Tax
    burtto?:number
}

enum Unit {
    szt,
    kg,
    g,
    l
}

enum Tax {
    osiem = "8%",
    dwadziesciaTrzy = "23%"
}