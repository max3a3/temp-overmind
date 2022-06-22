import { Context } from '.';

export const addFunds = async (context: Context) => {
    context.state.currentFunds = context.state.currentFunds + 1
}