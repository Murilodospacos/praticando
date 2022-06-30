import * as Exercise from './exercices';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);


console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Diamond de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}`);
console.log(`Diamond de diagonal maior 200cm e diagonal menor 50cm: ${Exercise.diamond(200, 50)}`);
console.log(`Diamond de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.diamond(75, 25)}`);

console.log(`Trapezio que tem base maior 100cm e base menor 70cm e altura 50cm: ${Exercise.trapezio(100, 70, 50)}`);
console.log(`Trapezio que tem base maior 100cm e base menor 70cm e altura 50cm: ${Exercise.trapezio(75, 50, 35)}`);
console.log(`Trapezio que tem base maior 100cm e base menor 70cm e altura 50cm: ${Exercise.trapezio(150, 120, 80)}`);

console.log(`Circle com raio igual 25cm ${Exercise.circle(25)}`);
console.log(`Circle com raio igual 25cm ${Exercise.circle(100)}`);
console.log(`Circle com raio igual 25cm ${Exercise.circle(12.5)}`);