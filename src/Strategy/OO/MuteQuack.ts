import { QuackBehavior } from './QuackBehavior';

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('Squeak');
  }
}
