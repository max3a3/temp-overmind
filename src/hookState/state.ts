import { createState } from "@hookstate/core";

export interface ZilliqaState {
    currentFunds: number
    isConnected: boolean
    openedSecrets: Record<string, Date>
}

export const globalState = createState<ZilliqaState>({
    currentFunds: 0,
    isConnected: false,
    openedSecrets: {}
});

export const actionIncrementFunds = () => {
    globalState.currentFunds.set(funds => funds + 1)
    console.log(globalState.currentFunds.get())
}
