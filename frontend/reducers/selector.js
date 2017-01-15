export const selectPersonalLists = ({ lists, session }) => (
  Object.keys(lists)
    .map(key => lists[key])
    .filter(
      (list) => list.user_id === session.currentUser.id
    )
);
