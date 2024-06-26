let l = [
  { id: 6511234, name: "Jack", salary: 10000 },

  { id: 6511235, name: "Mike", salary: 15000 },

  { id: 6511236, name: "Nancy", salary: 20000 },

  { id: 6511237, name: "Alice", salary: 30000 },
];

// console.table(l)

// for (let i = 0; i < l.length; i++) {
//     l[i].salary  *= 1.1
//     l[i].age = 30
// }

// console.table(l)

// function increaseSalary(emp) {
//     emp.salary *= 1.1
//     return emp
// }
//
// l.map(increaseSalary)

// l.map((emp) => {
//     emp.salary *= 1.1
//     return emp
// })

console.table(l);

function bonus(emp) {
  emp.salary *= 1.1;
  emp.bonus = emp.salary * 0.2;
  return emp;
}

let l2 = l.map(bonus).sort((a, b) => a.name.localeCompare(b.name));

console.table(l2);
