import axios from "axios";

import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const mark_x = (x: number, y: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MARK_X,
      payload: { x: x, y: y },
    });
  };
};

export const mark_0 = (x: number, y: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MARK_0,
      payload: { x: x, y: y },
    });
  };
};

export const startGame = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.START_GAME,
      payload: null,
    });
  };
};

export const error = (msg: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ERROR,
      payload: msg,
    });
  };
};