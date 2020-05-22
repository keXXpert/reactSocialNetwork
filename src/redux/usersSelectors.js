import { createSelector } from 'reselect'

const getUsersPrimitiveSel = (state) => {
    return state.usersPage.users
}
export const getUsersSel = createSelector(getUsersPrimitiveSel, (users) => {
    // some map, filtering and othe stuff (just an example)
    return users.filter(u => true)
})

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
