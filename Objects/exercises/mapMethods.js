let studentGrades = new Map();
studentGrades.set("Alice", "A");
studentGrades.set("Bob", "B");
studentGrades.set("Charlie", "C");

console.log(studentGrades.get("Alice")); 
console.log(studentGrades.has("Charlie"));  
console.log(studentGrades.size);  
studentGrades.delete("Bob");  
console.log(studentGrades.size);  
