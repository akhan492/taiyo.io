import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from './actions';
interface Contact {
    id: number;
    first_name: string,
    last_name: string
    status: string,
}

interface State {
    contacts: Contact[];
}

const initialState: State = {
    contacts: [],
};
export default function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT: {
            const { first_name, last_name } = action.payload;
            if (first_name === "" || last_name === "") {
                alert('Please fill in all required fields');
                return state;
            }

            const existingContact = state.contacts.find(contact =>
                contact.first_name === first_name && contact.last_name === last_name
            );

            if (existingContact) {
                alert('Name already exists in contacts');
                return state;
            }

            alert('Contact saved successfully!!!');

            const updatedContacts = [
                ...state.contacts,
                { id: state.contacts.length + 1, ...action.payload }
            ];

            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return {
                ...state,
                contacts: updatedContacts,
            };
        }

        case DELETE_CONTACT: {
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload.id);
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return {
                ...state,
                contacts: updatedContacts,
            };
        }

        case EDIT_CONTACT: {
            const { id, first_name, last_name } = action.payload;
            if (first_name === "" || last_name === "") {
                alert('Input fields cannot be left empty');
                return state;
            }

            const existingContact = state.contacts.find(contact =>
                contact.id !== id && contact.first_name === first_name && contact.last_name === last_name
            );

            if (existingContact) {
                alert("Name already exists");
                return state;
            }

            const updatedContacts = state.contacts.map(contact =>
                contact.id === id ? { ...action.payload } : contact
            );

            localStorage.setItem("contacts", JSON.stringify(updatedContacts));
            alert('Contact has been updated');
            return {
                ...state,
                contacts: updatedContacts,
            };
        }

        default:
            return state;
    }
}