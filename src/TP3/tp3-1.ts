abstract class Animal {
    abstract hacerSonido(): void;
  }

  class Gato extends Animal{
  
    hacerSonido(): void {
      console.log("Maiaau, miaau...");
    }

  }

  class Perro extends Animal{
  
    hacerSonido(): void {
      console.log("Guau, GUau...");
    }

  }
  
