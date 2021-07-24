export const ROOT_URL = "http://localhost:8000";
export const ACCOUNT_URL = `${ROOT_URL}/account`;
export const ELECTION_URL = `${ROOT_URL}/election`;
// ACCOUNT
export const LOGIN_URL = `${ACCOUNT_URL}/login/`; // post
export const REGISTER_URL = `${ACCOUNT_URL}/register/`; // post
export const GET_ACCOUNT_INFO_URL = `${ACCOUNT_URL}/users/`; // get
// ELECTION
export const RESET_ELECTION_URL = `${ELECTION_URL}/reset/`; // post

export const GET_CANDIDATES_LIST_URL = `${ELECTION_URL}/candidates/`; // get
export const CREATE_CANDIDATE_URL = `${ELECTION_URL}/candidates/`; // post
export const GET_CANDIDATE_INFO_URL = `${ELECTION_URL}/candidates`; // get, :param id:
export const UPDATE_CANDIDATE_INFO_URL = `${ELECTION_URL}/candidates`; // put, patch, :parm id:
export const DELETE_CANDIDATE_URL = `${ELECTION_URL}/candidates`; // delete, :param id:

export const GET_CITIES_LIST_URL = `${ELECTION_URL}/cities/`; // get
export const CREATE_CITY_URL = `${ELECTION_URL}/cities/`; // post
export const GET_CITIES_ZONES_LIST_URL = `${ELECTION_URL}/cities`; // get, :param id:+"zones"
export const GET_CITY_INFO_URL = `${ELECTION_URL}/cities`; // get, :param id:
export const UPDATE_CITY_INFO_URL = `${ELECTION_URL}/cities`; //put, patch, :param id:
export const DELETE_CITY_URL = `${ELECTION_URL}/cities`; // delete, :param id:

export const GET_ELECTIONS_LIST_URL = `${ELECTION_URL}/elections/`; // get
export const CREATE_ELECTION_URL = `${ELECTION_URL}/elections/`; // post
export const ADD_ELECTION_RESULT_BY_INSPECTOR_URL = `${ELECTION_URL}/elections/inspector-confirm-vote`; // post, :param election_id:
export const ADD_ELECTION_RESULT_BY_SUPERVISOR_URL = `${ELECTION_URL}/elections/supervisor-confirm-vote`; // post, :param election_id:
export const GET_ELECTION_INFO_URL = `${ELECTION_URL}/elections`; // get, :param id:
export const UPDATE_ELECTION_INFO_URL = `${ELECTION_URL}/elections`; // put, patch, :param id:
export const DELETE_ELECTION_URL = `${ELECTION_URL}/elections`; // delete, :param id:

export const GET_ZONES_LIST_URL = `${ELECTION_URL}/zones/`; // get
export const CREATE_ZONE_URL = `${ELECTION_URL}/zones/`; // post
export const GET_ZONE_INFO_URL = `${ELECTION_URL}/zones`; // get, :param id:
export const UPDATE_ZONE_INFO_URL = `${ELECTION_URL}/zones`; // put, patch, :param id:
export const DELETE_ZONE_URL = `${ELECTION_URL}/zones`; // delete, :param id:
