import { Node } from './node';

export class Tree {

  private _root: Node;

  get root(): Node {
    return this._root;
  }

  constructor() {
  }

  addItem(node: Node) {
    if (!this._root) {
      this._root = node;
    } else {
      this._root.addNode(node);
    }
  }

  sorted(): Node[] {
    return this._root.sorted();
  }

  isBalanced(): boolean {
    const maxLeft = this.root.getLeftMax();
    const maxRight = this.root.getRightMax();
    const dif = Math.abs(maxLeft - maxRight);
    return dif < 2;
  }

  balance(): void {
    const arr: Node[] = this._root.sorted();
    if(arr.length > 0) {
      this._root = new Node(this.removeMidNode(arr).value);
      while (arr.length) {
        const node: Node = new Node(this.removeMidNode(arr).value);
        this.addItem(node);
      }
    }
    console.log('balance complete ', this._root);
  }

  private removeMidNode(arr: Node[]): Node {
    const mid = Math.floor(arr.length / 2);
    const node: Node = arr.splice(mid, 1)[0] as Node;
    return node;
  }

}