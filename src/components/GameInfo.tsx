import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelectors";

export const GameInfo: React.FC = () => {
  const { startGame } = useActions();
  const { table, turn, error, win } = useSelector((state) => state.x0reducer);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {win?.winner && (
        <button className="button is-dark" onClick={startGame}>
          Restart!
        </button>
      )}
    </div>
  );
};
