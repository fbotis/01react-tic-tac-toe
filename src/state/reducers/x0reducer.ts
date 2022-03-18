import { O, X } from "../../components/Game";
import { ActionType } from "../action-types/index";
import { Action } from "../actions";

interface Winner {
  winner: string | null;
  boxes: { x: number; y: number }[];
}

interface GameState {
  table: string[][];
  turn: string | null;
  win: Winner | null;
  error: string | null;
}

const initState: GameState = {
  table: [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ],
  turn: null,
  win: null,
  error: null,
};

const x0reducer = (state: GameState = initState, action: Action): GameState => {
  const newState = { ...state };
  switch (action.type) {
    case ActionType.START_GAME:
      newState.turn = X;
      newState.error = null;
      newState.table = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ];
      newState.win = null;
      return newState;
    case ActionType.MARK_0:
      const newTable = state.table.slice();
      newTable[action.payload.x][action.payload.y] = O;
      newState.table = newTable;
      newState.turn = X;
      newState.error = null;
      newState.win = checkWin(newState.table);
      return newState;
    case ActionType.MARK_X:
      const newTable2 = state.table.slice();
      newTable2[action.payload.x][action.payload.y] = X;
      newState.table = newTable2;
      newState.turn = O;
      newState.win = checkWin(newState.table);
      newState.error = null;
      return newState;
    case ActionType.ERROR:
      newState.error = action.payload;
      return newState;
    default:
      return state;
  }
};

function checkWin(table: string[][]): Winner {
  var w: Winner = {
    winner: "",
    boxes: [],
  };
  for (let x = 0; x < table.length; x++) {
    if (
      table[x][0] !== "-" &&
      table[x][0] === table[x][1] &&
      table[x][1] === table[x][2]
    ) {
      w.boxes = [
        { x: x, y: 0 },
        { x: x, y: 1 },
        { x: x, y: 2 },
      ];
      w.winner = table[x][0];
      return w;
    }

    if (
      table[0][x] !== "-" &&
      table[0][x] === table[1][x] &&
      table[1][x] === table[2][x]
    ) {
      w.boxes = [
        { x: 0, y: x },
        { x: 1, y: x },
        { x: 2, y: x },
      ];
      w.winner = table[x][0];
      return w;
    }
  }

  if (
    table[0][0] !== "-" &&
    table[0][0] === table[1][1] &&
    table[1][1] === table[2][2]
  ) {
    w.boxes = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
    w.winner = table[0][0];
    return w;
  }

  if (
    table[0][2] !== "-" &&
    table[0][2] === table[1][1] &&
    table[1][1] === table[2][0]
  ) {
    w.boxes = [
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ];
    w.winner = table[0][0];
    return w;
  }

  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table[x].length; y++) {
      if (table[x][y] === "-") {
        return w;
      }
    }
  }

  w.winner = "NOBODY";
  return w;
}
export default x0reducer;
