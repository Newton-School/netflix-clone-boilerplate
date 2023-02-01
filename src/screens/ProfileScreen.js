import React from 'react'
import { useSelector } from "react-redux";
import {selectUser} from "../features/userSlice"
import './ProfileScreen.css'
import { auth } from "../firebase";
import Nav from '../Nav';
import PlansScreen from './PlansScreen';


function ProfileScreen() {
    const user = useSelector(selectUser);   
  return (
    <div className='profileScreen'>
        
        <Nav />

        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            </div>
            <div className='profileScreen_details'>
                <h2 >{user.email}</h2>
                <div className='profileScreen_plans'>
                    <h3 data-cy="plans_text">Plans</h3>
                    <PlansScreen />
                    <button 
                    onClick={() => auth.signOut()}
                    className='profileScreen_signOut'
                    data-cy="signout_button">Sign Out</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ProfileScreen