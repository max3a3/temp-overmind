// Import overmind stuff
import {
    createStateHook,
    createActionsHook,
} from 'overmind-react'
import { IContext } from 'overmind'
import { namespaced } from 'overmind/config';
// Import our namespaces
// import zilliqa from './zilliqa'
import { state } from './state'
import * as actions from './actions'
// import notifications from './notifications';
// Add namspaces to config
export const config = {
    state, actions
};

export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()