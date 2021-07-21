console.log("Executing types.ts");

interface IMyInterface {
  value:number;
}

type MyType = {
  value: number;
}

const function1 = (value: MyType) => value;
console.log("function 1 ", function1({value: 100}));
