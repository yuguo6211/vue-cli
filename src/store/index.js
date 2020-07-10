const store = {
    state: {
        message: 'Hello!'
    },
    setMessageAction(newValue) {
        this.state.message = newValue;
    },
    clearMessageAction() {
        this.state.message = '';
    }
};

export default store;