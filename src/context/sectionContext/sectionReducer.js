import {SECTION_CHANGE} from './action';

export const initialState = {
  current_section: 1,
};

const sectionReducer = (state, body) => {
  switch (body.action.type) {
    case SECTION_CHANGE:
      return {
        ...state,
        current_section: body.current_section
      }
    default:
  }
};

export default sectionReducer;