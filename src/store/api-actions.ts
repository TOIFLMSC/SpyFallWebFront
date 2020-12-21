import {requireAuthorization, redirectToRoute} from "./action";
import {AUTH_STATUS, NOAUTH_STATUS} from "../const";
import {AppRoute, APIRoute} from "../const";

interface UserData {
    login: string;
    password: string;
}

// export const fetchQuestionList = () => (dispatch: any, _getState: any, api: any) => (
//   api.get(APIRoute.QUESTIONS)
//     .then(({data}) => dispatch(loadQuestions(data)))
// );

export const checkAuth = () => (dispatch: any, _getState: any, api: any) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AUTH_STATUS)))
    .catch(() => {})
);

export const login = ({login, password}: UserData) => (dispatch: any, _getState: any, api: any) => (
  api.post(APIRoute.LOGIN, {login, password})
    .then(() => dispatch(requireAuthorization(AUTH_STATUS)))
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);