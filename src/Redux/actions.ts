// Action Types
export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

// Action Creators
// export type Contact = {
//   id: number;
//   name: string;
//   email: string;

// };
export const addContact = (payload) => {
  console.log(payload)
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const removeContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};
export const editContact = (payload) => {
  console.log(payload)
  return {
    type: EDIT_CONTACT,
    payload,
  };
};
