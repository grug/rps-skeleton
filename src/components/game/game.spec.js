import Game from './game';
import GameLogic from '../../services/gameLogic';

describe('Game component', () => {
  let gameComponent;
  let gameLogic;

  beforeEach(() => {
    gameLogic = new GameLogic();
    gameComponent = new Game(gameLogic)
  });

  it('Instantiates the component successfully', () => {
    expect(gameComponent).toBeDefined();
  });

  it('Starts with the right game state', () => {
    expect(gameComponent.playerWeapon).toBeUndefined();
    expect(gameComponent.computerWeapon).toBeUndefined();
    expect(gameComponent.result).toBeUndefined();
  });

  it('Can select a weapon for the computer', () => {
    expect(gameComponent.computerWeapon).toBeUndefined();

    gameComponent.selectComputerWeapon();

    expect(gameComponent.computerWeapon).toBeDefined();
  });

  it('Can reset the game state', () => {
    // Task: write some tests here.
  });
});
