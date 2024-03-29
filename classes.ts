abstract class UserAccount {
  //abstract é só um modelo para outras classes
  //não se pode criar objetos a partir dela
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    //método
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("-----GET-----");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}.`
    );
  }
}

// aqui dá erro por causa da abstract function
// const will = new UserAccount("Willian", 30);
// console.log(will);
// will.logDetails();

const john = new CharAccount("John", 45, "johnmaster", 80); // objeto
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();

john.setLevel = 499;

console.log(john.getLevel);
