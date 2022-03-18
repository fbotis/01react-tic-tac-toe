import { Provider } from "react-redux";
import { store } from "../state";
import { Game } from "./Game";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Game />
      </div>
    </Provider>
  );
};
