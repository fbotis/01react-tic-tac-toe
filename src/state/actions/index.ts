import { ActionType } from "../action-types";

export interface StartGameAction {
  type: ActionType.START_GAME;
  payload:  null;
}

export interface MarkXAction {
  type: ActionType.MARK_X;
  payload: { x: number; y: number };
}

export interface Mark0Action {
  type: ActionType.MARK_0;
  payload: { x: number; y: number };
}

export interface ErrorAction {
  type: ActionType.ERROR;
  payload: string;
}
export type Action = StartGameAction | Mark0Action | MarkXAction | ErrorAction;
