import { DSL } from "../src/dsl/dsl";

(async () => {
  const dsl = new DSL();
  const testScript = 
  'this.setVar("i", 0)\n'                      +
  'console.log(this.getVar("i"));\n'           +
  'this.setVar("i", this.getVar("i") + 1);\n'  +
  'if(this.getVar("i") < 10) this.jmp(1);'     ;
  
  console.log("start!");
  dsl.run(testScript);
})();
