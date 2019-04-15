import React, { Component } from 'react';
import UsersList from './UsersList';

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usersList: [],
            // searchUsersList
        }
    }

    addUser(e) {
        e.preventDefault();

        let usersList = this.state.usersList;
        let user = {
            name: this.inputValue.value,
            id: Date.now()
        }

        usersList.push(user);

        this.setState({ usersList });

        this.inputValue.value = '';
    }

    removeUser = (id) => {
        let usersList = this.state.usersList.filter(user => user.id !== id);

        this.setState({ usersList });
    }







    // onUserSeach = () => {
    //     const searchValue = this.searchInputValue.value;
        

    //     if (searchValue !== '') {
    //         let searchUsersList = this.state.usersList.filter(user => {
    //             return user.name.toLowerCase().includes(searchValue.toLowerCase());
    //         });

    //         this.setState({ searchUsersList, search });
    //     } else {
    //         this.setState({ usersList });
    //     }


    //     console.log(this.searchInputValue.value);
    // }






    render() {
        return (
            <div className="App">
                <h1>&#x02713; <span>Task List</span></h1>

                <form onSubmit={e => this.addUser(e)}>
                    <input
                        type='text'
                        placeholder='What do you have to do?'
                        ref={input => this.inputValue = input}
                    />
                    <button>Add</button>
                    {/* <br></br>
                    <input
                        className='search'
                        type='text'
                        placeholder='Search'
                        ref={input => this.searchInputValue = input}
                        onSearchChange={this.onUsersearch}
                    /> */}
                </form>
                <UsersList
                    users={this.state.usersList}
                    onRemove={this.removeUser}
                />
            </div>
        );
    }
}

export default Users;