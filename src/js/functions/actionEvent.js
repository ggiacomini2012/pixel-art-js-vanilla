import f from '.';

// #REFACTOR
export const actionEvent = (element, event, actionName, action) => {
  const addAction = {};
  addAction[actionName] = () => action;
  f.selectById(element).addEventListener(event, addAction.actionName);
};
