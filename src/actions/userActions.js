export const updateUserDisplayName = (name) => {
    return {
        type: 'SET_USER_NAME',
        payload: name
    }
}
export const UpdateUserId = (id) => {
    return {
        type: 'SET_USER_ID',
        payload: id
    }
}
export const updateUserData = (data) => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
}
export const updateUserDayTask = (task) => {
    return {
        type: 'SET_USER_TASK',
        payload: task
    }
}