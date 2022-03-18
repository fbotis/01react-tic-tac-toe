import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelectors";
import { GameCell } from "./GameCell";

export const GameTable: React.FC = () => {
  const { table } = useSelector((state) => state.x0reducer);

  return (
    <table>
      <tbody>
        {table.map((row, rindex) => {
          return (
            <tr key={rindex.toString()}>
              {row.map((item, cindex) => {
                return (
                  <td key={rindex.toString() + cindex.toString()}>
                    <GameCell row={rindex} col={cindex} value={item} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
