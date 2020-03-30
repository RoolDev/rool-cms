import * as React from 'react';

/**
 * Dependencies
 */

/**
 * Models
 */
import { User } from './modules/index/models/user';

/**
 * Types
 */
type Types = 'setAuth' | 'setUser' | 'setAccessToken';

export type Action = {
  type: Types;
  value: any;
};

type Dispatch = (action: Action) => void;

type State = Partial<{
  user: User;
  accessToken: string;
  accessTokenValidated: boolean;
}>;
type ProviderProps = { children: React.ReactNode };

/**
 * Context Providers
 */
const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

/**
 * Reducer
 */
const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setAuth':
      const { accessToken, user } = action.value;
      return { ...state, user, accessToken, accessTokenValidated: true };

    case 'setAccessToken':
      return {
        ...state,
        accessToken: action.value,
        accessTokenValidated: true
      };

    default:
      throw new Error(`Action ${action.type} not found.`);
  }
};

export const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(appReducer, {
    user: undefined,
    accessToken: window.localStorage.getItem('accessToken') ?? undefined,
    accessTokenValidated: false
  });

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useTaskState must be used within a TaskProvider');
  }

  return context;
};

export const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }

  return context;
};

export const useApp = (): [State, Dispatch] => {
  return [useAppState(), useAppDispatch()];
};
