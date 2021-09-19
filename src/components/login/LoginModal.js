import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'
import AddNewUser from './AddNewUser';

import logo from '../../assets/images/logo.svg';

export function LoginModal() {
    const users = useSelector(state => state.users);
    const [show, toggleShow] = useState(false);
    
    const renderedUsers = users.map(user => (
        <option key={user.id} className="user-name" value={user.name}>
          {user.name}
        </option>
      ))

      const add_new_user = () => toggleShow(true)

    return(
        <div className='LoginModal'>
            <img src={logo} className="App-logo" alt="logo" />
            <br/>
            <br/>
            <h2>Select a user to log in</h2>
            <br/>
            <select>
                { renderedUsers }
                <option value={'add_new_user'} disabled={true}>Add New User</option>
                //TODO: Finish AddNewUser functionality
            </select>
            <br/>
            <br/>
            {show && (
                    <AddNewUser/>
                    //TODO: Finish AddNewUser functionality
                )
            }
            <br/>
            <Button>Log In</Button>
        </div>
    )

}


export default LoginModal