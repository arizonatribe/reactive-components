import types from './types'

export const handleError = error => ({error, type: types.ERROR})
export const clearError = () => ({type: types.CLEAR_ERROR})
export const decodedJwt = jwt => ({jwt, type: types.DECODED_JWT})
export const getUserNavMenu = navigation => ({navigation, type: types.GET_USER_NAV_MENU})
export const passwordHelp = email => ({email, type: types.PASSWORD_HELP})
export const refresh = refreshTimeout => ({refreshTimeout, type: types.REFRESH})
export const clearRefresh = () => ({type: types.CLEAR_REFRESH})
export const register = user => ({user, type: types.REGISTER_USER})
export const registerApp = app => ({app, type: types.REGISTER_APP})
export const toggleRememberMe = rememberMe => ({rememberMe, type: types.REMEMBER_ME})
export const login = user => ({user, type: types.LOGIN})
export const logout = () => ({type: types.LOGOUT})
export const updatedToken = token => ({token, type: types.UPDATED_TOKEN})
export const parsedToken = token => ({token, type: types.PARSED_TOKEN})
export const validatedToken = token => ({token, type: types.VALIDATED_TOKEN})
export const userInfoFromToken = user => ({user, type: types.USER_INFO_FROM_TOKEN})
export const startedLoading = () => ({type: types.LOADING_STARTED})
export const finishedLoading = () => ({type: types.LOADING_FINISHED})
