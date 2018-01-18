// // // // // // // // // //
//
//      Display - Actions
//
// // // // // // // // // //


// * * * * * * * * * * * * * * * 
// Flash Message Action
// * * * * * * * * * * * * * * * 
export const FLASH_MESSAGE = 'FLASH_MESSAGE';
export const flashMessage = msg => ({
    type: FLASH_MESSAGE,
    msg: msg
});
export const REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
export const removeFlashMessage = () => ({
    type: REMOVE_FLASH_MESSAGE
});
export const FLASH_MSG_CLASS = 'FLASH_MSG_CLASS';
export const flashMsgClass = (classname) => ({
    type: FLASH_MSG_CLASS,
    classname
});


// * * * * * * * * * * * * * * * 
// Confirm Message Action
// * * * * * * * * * * * * * * * 
export const CONFIRM_MESSAGE = 'CONFIRM_MESSAGE';
export const confirmMessage = (msg, action, actionMsg) => ({
    type: CONFIRM_MESSAGE,
    msg, 
    action,
    actionMsg
});
export const CONFIRM_CLASS = 'CONFIRM_CLASS';
export const confirmClass = classname => ({
    type: CONFIRM_CLASS,
    classname
});

export const CONFIRM_REDIRECT = 'CONFIRM_REDIRECT';
export const confirmRedirect = (path, msg, confirmActionMsg) => ({
    type: CONFIRM_REDIRECT,
    path,
    msg, 
    confirmActionMsg
});

// * * * * * * * * * * * * * * *
// Toggles nav menu
// * * * * * * * * * * * * * * *
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = () => ({
    type: TOGGLE_MENU
});


// * * * * * * * * * * * * * * *
// Sets current window width
// * * * * * * * * * * * * * * *
export const SET_WIDTH = 'SET_WIDTH';
export const setWidth = width => ({
    type: SET_WIDTH,
    width
});

