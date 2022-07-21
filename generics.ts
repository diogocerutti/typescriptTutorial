// Padrões da maioria dos códigos para generics
// S => State
// T => Type
// K => Key
// V => Value
// E => Elements

type numOrStr = number | string;

// É assim que o React trata os generics
// React.FC<Props, States>

function useState<S extends numOrStr = string>() {
  // "string = string" o default é string
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// const newState = useState<string>();
const newState = useState();

newState.setState("foo");
console.log(newState.getState());

// como já atribuiu string, se tentar colocar number vai dar erro
// newState.setState(123);
// console.log(newState.getState());

newState.setState("bla");
console.log(newState.getState());
