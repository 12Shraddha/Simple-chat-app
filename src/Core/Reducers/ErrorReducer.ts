interface ErrorAction {
  type: string;
  error: Error | string;
}

export interface ErrorState {
  [key: string]: null | Error | string;
}

const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);

const ErrorReducer = (state: ErrorState = {}, action: ErrorAction) => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "FAILURE" ? action.error : null,
  };
};

export default ErrorReducer;