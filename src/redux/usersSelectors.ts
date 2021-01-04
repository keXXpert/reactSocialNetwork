import { RootState } from './redux-store';
import { createSelector } from 'reselect'

const getUsersPrimitiveSel = (state: RootState) => {
    return state.usersPage.users
}
export const getUsersSel = createSelector(getUsersPrimitiveSel, (users) => {
    // some map, filtering and othe stuff (just an example of additional 'heavy' logics)
    return users.filter(u => true)
})

export const getUsersOnPageSel = (state: RootState) => {
    return state.usersPage.usersOnPage
}
export const getTotalUsersCountSel = (state: RootState) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSel = (state: RootState) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSel = (state: RootState) => {
    return state.usersPage.isFetching
}
export const getIsFollowingSel = (state: RootState) => {
    return state.usersPage.isFollowing
}
