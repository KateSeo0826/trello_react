export const getListsBoardId = (boards, boardID) => {
    const board = boards[boardID];
    const lists = board.lists;
    return lists;
};