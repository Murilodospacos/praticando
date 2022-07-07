let nome: string = "Murilo";
let idade: number = 10;
let isTryber: boolean = true;
let stringOrNumber: string | number = 10;
stringOrNumber = "Maria";

// NÃO USAR NUNCA
let any: any = 10;
any = "Murilo";
any = true

const students: (string | number)[] = ["Kaylane", "Luiz monte", "Ronny velardez", 10];

const objArray: { name: string }[] = [{ name: "Carlos" }];

const soma = (a: number, b: number): number => a + b;

const concatena = (a: string, b: string): string => a + b;

function somaTrad(a: number, b: number): number {
    return a + b;
}

function hello(name: string): void {
    console.log(`Hello ${name}`);
}

function retornaMedia(arr: number[], student: string): number | string {
   const soma = arr.reduce((acc,nota) => acc + nota, 0);
   
   const media = soma / arr.length;

   if(media < 7) {
    return 'Você não passou dessa vez, tente novamente'
   }

   return media;
}

const arrayDeArray: (string[])[] = [["casa", "predio"],["garfo", "faca"], []]

enum Profissoes {
    PROGRAMADOR = "PROGRAMADOR",
    QA = "QA",
    PO = "PO",
    PM = "PM",
}

const input = "PROGRAMADOR";

const profissao1: Profissoes = Profissoes.PROGRAMADOR;
const profissao2: Profissoes = Profissoes[input];


console.log("Código executado 3");
