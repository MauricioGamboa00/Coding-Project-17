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

const customer = new Customer("Tony Hawk", "TonyHawk100@gmail.com"); // Creating a new customer

customer.addPurchase(100); // Adding a purchase to purchase history
customer.addPurchase(40); // Adding a purchase to purchase history
customer.addPurchase(300); // Adding a purchase to purchase history

console.log(customer.getDetails()) // Logging the customer details to the console
