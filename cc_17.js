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



