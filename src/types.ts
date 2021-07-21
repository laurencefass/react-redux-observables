console.log("Executing types.ts");

export interface IReducers {
  root: any;
  ping: any;
  interval: any;
}

export interface ISimpleAction {
  type: string
}

export interface ICounterAction {
  type: string,
  payload: {
    value: number
  }
} 
