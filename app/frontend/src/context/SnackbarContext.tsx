'use client';
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Reducer,
  Dispatch,
  Context,
  ReactElement
} from 'react';

export interface Snackbar {
  open: boolean;
  title: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

interface SnackbarContextType {
  state: Snackbar;
  dispatch: Dispatch<SnackbarAction>;
}

type SnackbarAction =
  | { type: 'SHOW_SNACKBAR'; payload: Omit<Snackbar, 'open'> }
  | { type: 'HIDE_SNACKBAR' };

const initialSnackbarState: Snackbar = {
  open: false,
  title: '',
  severity: 'success'
};

const snackbarReducer: Reducer<Snackbar, SnackbarAction> = (
  state: Snackbar,
  action: SnackbarAction
): Snackbar => {
  switch (action.type) {
    case 'SHOW_SNACKBAR':
      return { ...state, ...action.payload, open: true };
    case 'HIDE_SNACKBAR':
      return { ...state, open: false };
    default:
      return state;
  }
};

const SnackbarContext: Context<SnackbarContextType | undefined> = createContext<
  SnackbarContextType | undefined
>(undefined);

export const SnackbarProvider: ({ children }: { children: ReactNode }) => ReactElement = ({
  children
}: {
  children: ReactNode;
}): ReactElement => {
  const [state, dispatch] = useReducer(snackbarReducer, initialSnackbarState);

  return (
    <SnackbarContext.Provider value={{ state, dispatch }}>{children}</SnackbarContext.Provider>
  );
};

export const useSnackbarContext: () => SnackbarContextType = (): SnackbarContextType => {
  const context: SnackbarContextType | undefined = useContext(SnackbarContext);
  if (!context) throw new Error('useSnackbarContext must be used within a SnackbarProvider');

  return context;
};
