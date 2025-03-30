// Task 1 Create a Customer Class

class Customer{
   constructor(name, email) {
    this.name = name; // Customer Name
    this.email = email; // Customer Email
    this.purchaseHistory = []; // Customer Purchase History
   }

// Function to get Customer Details
getDetails() {
    return `Customer Name: ${this.name}, Customer Email: ${this.email}, Total Spent: $${this.getTotalSpent()} `
}

// Function to add purchase amounts to Purchase History
addPurchase(amount) {
    this.purchaseHistory.push(amount);
}

// Function to calculate the total amount spent
getTotalSpent(){
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0)
}

}

const customer1 = new Customer("Tony Hawk", "TonyHawk100@gmail.com"); // Creating a new customer

const customer2 = new Customer("Hank Hill", "GrillMaster200@gmail.com") // Creating a new customer

const customer3 = new Customer ("Lebron James", "KingJames@gmail.com") // Creating a new customer

customer1.addPurchase(100); // Adding a purchase to purchase history for customer 1
customer1.addPurchase(40); // Adding a purchase to purchase history for customer 1
customer1.addPurchase(300); // Adding a purchase to purchase history for customer 1

customer2.addPurchase(50); // Adding a purchase to purchase history for customer 2
customer2.addPurchase(190); // Adding a purchase to purchase history for customer 2

customer3.addPurchase(1500); // Adding a purchase to purchase history for customer 3
customer3.addPurchase(500); // Adding a purchase to purchase history for customer 3
customer3.addPurchase(100); // Adding a purchase to purchase history for customer 2

console.log(customer1.getDetails()) // Logging the customer details to the console
console.log(customer2.getDetails()) // Logging the customer details to the console
console.log(customer3.getDetails()) // Logging the customer details to the console


// Task 2 Create a SalesRep Class

class SalesRep{
    constructor(name) {
        this.name = name; // Sales Rep Name
        this.clients = []; // Array Of Clients
    }

    // Function to get Sales Rep Details
    getDetails() {
    const totalClientSpent = this.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
    return `Sales Rep Name: ${this.name}, Total Clients Spent: $${totalClientSpent}`;
    }

    // Function to add clients to client list
    addClient(customer) {
        this.clients.push(customer);
    }

    // Function to get Client Name and total the client spent
    getClientTotal(name) {
        const client = this.clients.find(customer => customer.name === name);
        if (client) {
           return `${client.name} has spent $${client.getTotalSpent()}`; // If the client is found log this to console
        } else {
           return `Client not found.`; // If the client is not found log this message to console
        }
     }
  }  
    



const salesRep = new SalesRep("Sarah Connor"); // Creating a new Sales Rep

salesRep.addClient(customer1); // Adding customer 1 to the Sales Rep
salesRep.addClient(customer2); // Adding customer 2 to the Sales Rep
salesRep.addClient(customer3); // Adding customer 3 to the Sales Rep

console.log(salesRep.getDetails()); // Logging the Sales Rep Details to the console
console.log(salesRep.getClientTotal("Tony Hawk")); // Logging how much Tony Hawk has spent

// Task 3 Create a VIPCustomer Class

class VIPCustomer extends Customer{
    constructor(name, email, vipLevel){
        super(name, email); // Calling the Customer class constructor
        this.vipLevel = vipLevel; // VIP level for Vip Customers
        this.purchaseHistory = []; // VIP Customer Purchase History
    }

   // Function to get Vip Customer Details
   getDetails() {
    return `VIP Customer Name: ${this.name}, VIP Email: ${this.email}, VIP Level: ${this.vipLevel}, Total Spent: $${this.getTotalSpent()}`

   }

   // Function to override get total spent to include a 10% bonus
   getTotalSpent(){
    const totalSpent = super.getTotalSpent();
    return totalSpent + (totalSpent * 0.1); // Adding the 10% Loyalty bonus to the total spent
   }

   



   

}

const VIPCustomer1 = new VIPCustomer("Steve Jobs", "SteveAppleOG@gmail.com", "Platinum"); // Creating a new VIP Customer
const VIPCustomer2 = new VIPCustomer("Bill Gates", "GatesMicro@gmail.com", "Gold"); // Creating a new VIP Customer

VIPCustomer1.addPurchase(1000); // adding a purchase to purchase history for VIP customer 1
VIPCustomer1.addPurchase(1500); // adding a purchase to purchase history for VIP customer 1
VIPCustomer2.addPurchase(150); // adding a purchase to purchase history for VIP customer 2
VIPCustomer2.addPurchase(150); // adding a purchase to purchase history for VIP customer 2

console.log(VIPCustomer1.getDetails()); // Logging the VIP customer 1 details to the console
console.log(VIPCustomer2.getDetails()); // Logging the VIP customer 2 details to the console

salesRep.addClient(VIPCustomer1); // Added  Vip Customer 1 to the Sales Rep
salesRep.addClient(VIPCustomer2); // Added  Vip Customer 2 to the Sales Rep


// Task 4  Build a Client Report System

// Calculating Total Revenue from all Customers
const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
console.log(`Total Revenue: $${totalRevenue}`); // Logging the Total Customer Revenue to the Console

// Filtering out Customers who spent more than $500 
const highSpenders = salesRep.clients
.filter(client => client.getTotalSpent() > 500 )
.map(client => client.name); // Using .map to only get the customer names

console.log("High Spending Customers:" , highSpenders); // Logging the client names of those who spent more than $500

// Creating an array with Customer Names and Total Spent
const customerSpendingOverall = salesRep.clients.map(client => ({
    Name: client.name, 
    TotalSpent: `$${client.getTotalSpent()}`
}));

console.log("Customer Spending Overview:", customerSpendingOverall); // Logging the array of customer names and totals spent to the console