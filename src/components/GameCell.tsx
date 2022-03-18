import { useSelector } from "../hooks/useTypedSelectors";
import { useActions } from "../hooks/useActions";
import { O, X } from "./Game";

interface GameProps {
  row: number;
  col: number;
  value: string;
}

export const GameCell: React.FC<GameProps> = ({ row, col, value }) => {
  const state = {
    play: false,
  };
  const audio = new Audio("./sound.wav");

  const { mark_0, mark_x, error } = useActions();
  const { turn, table, win } = useSelector((state) => state.x0reducer);

  const onClick = () => {
    if (table[row][col] === "-" && !win?.winner) {
      audio.play();
      if (turn === X) {
        mark_x(row, col);
      } else if (turn === O) {
        mark_0(row, col);
      } else {
        error("Start game first!");
      }
    }
  };

  let isWinner: boolean = !win
    ? false
    : win.boxes.filter((pos) => pos.x == row && pos.y == col).length > 0;

  let clsName = isWinner ? "box winner " : value === "-" ? "box" : "box filled";

  return (
    <div
      key={row.toString() + col.toString()}
      onClick={onClick}
      className={clsName}
    >
      {value}
    </div>
  );
};
