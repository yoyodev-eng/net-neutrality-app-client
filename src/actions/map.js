// // // // // // // // // //
//
//      Map - Actions
//
// // // // // // // // // //

import { API_BASE_URL } from 'config';
import { normalizeResponseErrors } from './utils';

// * * * * * * * * * * * * * * *
// Loads prev state from session
// * * * * * * * * * * * * * * *
export const LOAD_PREV_STATE = 'LOAD_PREV_STATE';
export const loadPrevState = (prevState) => ({
    type: LOAD_PREV_STATE,
    prevState
});

// * * * * * * * * * * * * * * *
// Sets current state
// * * * * * * * * * * * * * * *
export const SET_CURRENT_STATE = 'SET_CURRENT_STATE';
export const setCurrentState = (currentState) => {
    return {
        type: SET_CURRENT_STATE,
        currentState
    }
};

// * * * * * * * * * * * * * * *
// Sets display boolean to true
// to display lists
// * * * * * * * * * * * * * * *
export const DISPLAY_CANDIDATES = 'DISPLAY_CANDIDATES';
export const displayCandidates = () => ({
    type: DISPLAY_CANDIDATES
});


// * * * * * * * * * * * * * * *
// clears all candidates from
// store
// * * * * * * * * * * * * * * *
export const CLEAR_CANDIDATES = 'CLEAR_CANDIDATES';
export const clearCandidates = () => ({
    type: CLEAR_CANDIDATES
});


// * * * * * * * * * * * * * * *
// Adds candidates to store
// * * * * * * * * * * * * * * *
export const GET_CANDIDATES_SUCCESS = 'GET_CANDIDATES_SUCCESS';
export const getCandidatesSuccess = candidates => ({
    type: GET_CANDIDATES_SUCCESS,
    house: candidates.house,
    senate: candidates.senate
});
export const GET_CANDIDATES_ERROR = 'GET_CANDIDATES_ERROR';
export const getCandidatesError = error => ({
    type: GET_CANDIDATES_ERROR,
    error
});

// * * * * * * * * * * * * * * *
// Gets current candidates for
// part of Congress given
// * * * * * * * * * * * * * * *
export const getCandidates = (state, congressGroup) => dispatch => {
    congressGroup = congressGroup ? congressGroup : 'all'; // by default returns ALL candidates
    return (
        fetch(`${API_BASE_URL}/candidates/${congressGroup}?state=${state}`, {
            method: 'GET'
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch(getCandidatesSuccess(res.Candidates2018));
        })
        .catch(err => {
            console.log({message: 'Internal server error', err})
            dispatch(getCandidatesError(err));
        })
    );
};


