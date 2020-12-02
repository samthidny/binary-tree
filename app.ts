import { Node } from "./node";
import { Tree } from "./tree";

export class App {

  private _tree: Tree;
  
  constructor() {
    console.log('Typescript App instantiated.');
    this._tree = new Tree();
  }

  public init(): void {
    //const str: String = 'thequickbrownfoxjumpedoverthelazydog';
    const str: String = 'cbadefghijklmnopqrstuvwxyz';
    
    const arr: string[] = str.split('');

    arr.forEach((item) => {
      const node: Node = new Node(item);
      node.value = item;
      this._tree.addItem(node);
    });

    if (!this._tree.isBalanced()) {
      this._tree.balance();
      console.log('Tree rebalanced ', this._tree);
    }

  }

}