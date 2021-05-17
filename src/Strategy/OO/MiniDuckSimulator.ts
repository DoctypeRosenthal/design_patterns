import { Duck } from './Duck';
import { MallardDuck } from './MallardDuck';

class MiniDuckSimulator {
  constructor() {
    const mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
  }
}

new MiniDuckSimulator();
