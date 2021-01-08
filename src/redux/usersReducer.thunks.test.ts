import { ConfirmResponseType } from "../api/api"
import { followAPI } from "../api/endpoints/follow"
import { followUser, usersActions } from "./usersReducer"

jest.mock('../api/endpoints/follow')
const getStateMosck = jest.fn()
const dispatchMock = jest.fn()

const result: ConfirmResponseType = {
    resultCode: 0,
    messages: [],
    data: {}
}

const userId = 1

const followAPIMock = followAPI as jest.Mocked<typeof followAPI>

followAPIMock.follow.mockReturnValue(Promise.resolve(result))
followAPIMock.unFollow.mockReturnValue(Promise.resolve(result))

beforeEach(() => {
    getStateMosck.mockClear()
    dispatchMock.mockClear()
})

test('test follow thunk', async () => {
    const thunk = followUser(userId, false)
    await thunk(dispatchMock, getStateMosck, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleIsFollowing(true, userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleIsFollowing(false, userId))
})

test('test unfollow thunk', async () => {
    const thunk = followUser(userId, true)
    await thunk(dispatchMock, getStateMosck, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleIsFollowing(true, userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(userId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleIsFollowing(false, userId))
})




