export class DSL {
  pc : number = 0;
  codes : Array<string> = [];
  variables : {[key : string] : any} = {};

  load(script : string) : void {
    this.codes = script.split("\n");
  }

  loadFromUrl(url : string, async : boolean) : void {
  }

  setVar(name : string, value : any) : void {
    this.variables[name] = value;
  }

  getVar(name : string) : any {
    return this.variables[name];
  }

  jmp(line : number) : void {
    this.pc = line - 1; // skip pc++
  }

  singleStep() : void {
    try {
      eval(this.codes[this.pc]);
      this.pc++;
    } catch(e) {
      throw e;
    }
  }

  execute() : void {
    this.pc = 0;
    while(this.pc < this.codes.length) {
      this.singleStep();
    }
  }

  run(script: string) {
    this.load(script);
    this.execute();
  }
}
