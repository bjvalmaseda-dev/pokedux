export const logger = (store) => (next) => (action) => {
  //next function called when middleware is finished and this function send the action to reducer
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updateActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updateActionInfo);
};
