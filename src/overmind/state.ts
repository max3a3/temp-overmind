
interface ZilliqaState {
    currentFunds: number
    isConnected: boolean
    openedSecrets: Record<string, Date>
}

export const state: ZilliqaState = {
    currentFunds: 0,
    isConnected: false,
    openedSecrets: {}
}
