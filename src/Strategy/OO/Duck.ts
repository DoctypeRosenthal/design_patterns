import { QuackBehavior } from './QuackBehavior';
import { FlyBehavior } from './FlyBehavior';
import { Quack } from './Quack';
import { FlyNoWay } from './FlyNoWay';

export abstract class Duck {
  quackBehavior: QuackBehavior;
  flyBehavior: FlyBehavior;

  constructor() {
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log('All ducks float, even decoys!');
  }

  abstract display(): void;

  performFly() {
    this.flyBehavior.fly();
  }
}
