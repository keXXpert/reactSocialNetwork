export const getUsersSel = (state) => {
    return state.usersPage.users
}
export const getUsersOnPageSel = (state) => {
    return state.usersPage.usersOnPage
}
export const getTotalUsersCountSel = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSel = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSel = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowingSel = (state) => {
    return state.usersPage.isFollowing
}
