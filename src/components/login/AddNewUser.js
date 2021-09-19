import React from 'react'


function AddNewUser() {
    

    const getFirstName = (e) => {
        return e.target.value
    }

    const userValidation = (e) => {
      return e.target.value
    }

    return(
        <div className='new_user_modal'>
            <input type='text' placeholder='User first name' onChange={(e) => userValidation(e)}></input><br/><br/>
            <input type='text' placeholder='User last name' onChange={
                    (e) => {userValidation(e)
                }
            }></input>
        </div>
    )

}

export default AddNewUser