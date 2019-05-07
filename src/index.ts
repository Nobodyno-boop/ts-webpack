 /**
  * Sample code
  * 
  * 
  * 
  * 
  */



export default class A {
    private string: string; 

    constructor(string: string){
        this.string = string;
    }

    public hello(world: string): string {
        return this.string + world;
    }


    public toString(){
        return this.string;
    }

}

window['e'] = A;