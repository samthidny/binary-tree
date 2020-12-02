export class Node {

  private _left: Node;
  private _right: Node;
  private _value: string;

  public get value(): string {
    return this._value;
  }

  public set value(value: string): void {
    this._value = value;
  }

  constructor(value: string) {
    this._value = value;
  }

  addNode(node: Node): void {
    if (node.value < this._value) {
      if (!this._left) {
        this._left = node;
      } else {
        this._left.addNode(node);
      }
    } else if (node.value > this._value) {
      if (!this._right) {
        this._right = node;
      } else {
        this._right.addNode(node);
      }
    }
  }

  createNode(value: string): Node {
    const node = new Node(value);
    return node;
  }

  sorted(): Node[] {
    let arr: Node[] = [];
    if (this._left) {
      arr = arr.concat(this._left.sorted());
    }

    arr.push(this);

    if (this._right) {
      arr = arr.concat(this._right.sorted());
    }

    return arr;
  }

  toString(): string {
    return this._value;
  }

  getLeftMax(count: number = 0) : number {
    if(this._left) {
      return this._left.getLeftMax() + 1;
    }
    return count;
  }


  getRightMax(count: number = 0) : number {
    if(this._right) {
      return this._right.getRightMax() + 1;
    }
    return count;
  }

}