import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelectors";
import { GameCell } from "./GameCell";
import { GameInfo } from "./GameInfo";
import { GameTable } from "./GameTable";

export const X = "x";
export const O = "0";

export const Game: React.FC = () => {
  const { startGame } = useActions();

  useEffect(() => {
    startGame();
  }, []);

  const onStart = () => {
    startGame();
  };

  return (
    <div>
      <GameTable />
      <GameInfo />
    </div>
  );
};
