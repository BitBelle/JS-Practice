class BankAccount {
    // Static property to keep track of total accounts created
    static totalAccounts = 0;
  
    constructor(accountHolder, balance = 0) {
      this.accountHolder = accountHolder;
      this.balance = balance;
      
      // Increment the total number of accounts when a new one is created
      BankAccount.totalAccounts++;
    }
  
    // Instance method to deposit money
    deposit(amount) {
      this.balance += amount;
    }
  
    // Instance method to withdraw money
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient balance!`);
      } else {
        this.balance -= amount;
      }
    }
  
    // Static method to create a new account with a starting balance
    static createAccountWithBalance(accountHolder, initialBalance) {
      return new BankAccount(accountHolder, initialBalance);
    }
  }
  
  // Creating instances using constructor
  let account1 = new BankAccount("Alice", 500);
  let account2 = new BankAccount("Bob", 300);
  
  // Using static method to create an account
  let account3 = BankAccount.createAccountWithBalance("Charlie", 1000);
  
  console.log(`Total accounts created: ${BankAccount.totalAccounts}`);  // → 3
  
  // Interacting with individual accounts
  account1.deposit(200);
  console.log(`${account1.accountHolder}'s balance: $${account1.balance}`);  // → 700
  
  account2.withdraw(100);
  console.log(`${account2.accountHolder}'s balance: $${account2.balance}`);  // → 200
  