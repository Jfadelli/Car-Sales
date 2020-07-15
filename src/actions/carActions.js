export const ADD_FEATURE = 'ADD_FEATURE';

export const updateFeatures = newFeatures => {
    return { type: ADD_FEATURE, payload: newFeatures }
}