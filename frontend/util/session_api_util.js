export const login = user => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    })
)

export const signup = user => (
    $.ajax({
        url: 'api/user',
        method: 'POST',
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)