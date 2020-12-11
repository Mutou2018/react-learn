import { type } from "os";
import { INCREMENT, DECREMENT } from "../constants";

export interface INCREMENTAction {
    type: INCREMENT;
}
export interface DECREMENTAction {
    type: DECREMENT;
}

export type ModifyAction = INCREMENTAction | DECREMENTAction
// 增加state方法
export function increment(): INCREMENTAction {
    return {
        type: INCREMENT
    }
}
// 减少state方法
export function decrement(): DECREMENTAction {
    return {
        type: DECREMENT
    }
}