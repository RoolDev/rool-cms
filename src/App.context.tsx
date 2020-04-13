import * as React from 'react';

/**
 * Dependencies
 */
import * as AppActions from './App.actions';
import { useMount } from 'react-use';

/**
 * Components
 */
import LoadingSpinner from './components/spinner';

/**
 * Models
 */
import { IUserDetails } from './modules/home/models/user-details';

/**
 * Types
 */
type Types =
  | 'setAuth'
  | 'setUser'
  | 'setAccessToken'
  | 'setAuthTicket'
  | 'removeAccessToken';

export type Action = {
  type: Types;
  value: any;
};

type Dispatch = (action: Action) => void;

type State = Partial<{
  user: IUserDetails;
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

    case 'removeAccessToken': {
      return {
        ...state,
        accessToken: undefined,
        accessTokenValidated: false,
      };
    }

    case 'setAccessToken':
      return {
        ...state,
        accessToken: action.value,
        accessTokenValidated: true,
      };

    case 'setAuthTicket':
      if (!state.user) {
        throw new Error('Usuário não definido no contexto.');
      }

      return {
        ...state,
        user: {
          ...state.user,
          auth_ticket: action.value,
        },
      };

    default:
      throw new Error(`Action ${action.type} not found.`);
  }
};

export const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(appReducer, {
    user: undefined,
    accessToken: window.localStorage.getItem('accessToken') ?? undefined,
    accessTokenValidated: false,
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

export const AppTokenVerification: React.FC = (props) => {
  const [state, dispatch] = useApp();

  const [isLoading, setIsLoading] = React.useState(true);

  useMount(async () => {
    try {
      if (state.accessToken) {
        dispatch(await AppActions.revalidateToken(state.accessToken));
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{props.children}</>;
};
