export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = addFeature => {
    return { type: ADD_FEATURE, payload: addFeature }
}

export const removeFeature = removeFeature => {
    return { type: REMOVE_FEATURE, payload: removeFeature }
}