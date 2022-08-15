const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890,types: "none"  },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230,types: "Runing"  },
    { id: 2, name: "Test Name", email: "test@test.com", phone: 4567891230,types: "Stoped"  },
    { id: 3, name: "Test Name", email: "test@test.com", phone: 4567891230,types: "Runing"  },
    { id: 4, name: "Test Name", email: "test@test.com", phone: 4567891230,types: "none"  },

  ];
  export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
          contact.id === action.payload ? null : contact
        );
        state = contactFilter;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null, types: null }];
        return state;
      default:
        return state;
    }
  };