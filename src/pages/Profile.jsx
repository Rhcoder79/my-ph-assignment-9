import React, {  useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import EditProfileForm from '../components/EditProfileForm';


const Profile = () => {
    const { user,updateUserProfile } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const navigate = useNavigate();
const handleUpdate = (e) => {
        e.preventDefault();
        
       
        updateUserProfile(name, photo)
            .then(() => {
                toast("Profile Updated Successfully!");
                setIsEditing(false);
                navigate('/profile');
            })
            .catch((error) => {
                toast("Error updating profile: " + error.message);
            });
    };
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center px-4">
            <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300">
                <figure className="px-10 pt-10">
                  
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img 
                                src={user?.photoURL || "https://via.placeholder.com/150"} 
                                alt="User Profile" 
                            />
                        </div>
                    </div>
                </figure>
                
                <div className="card-body items-center text-center"> 
                    {!isEditing ? (
                   
                        <div>
                            <h2 className="card-title text-2xl font-bold text-primary">
                                Welcome, {user?.displayName || "User"}!
                            </h2>
                            <div className="space-y-2 mt-4 text-left w-full bg-base-200 p-4 rounded-lg">
                                <p className="text-sm font-semibold text-gray-500 uppercase">Full Name</p>
                                <p className="text-lg font-medium">{user?.displayName || "Not Set"}</p>
                                <div className="divider my-1"></div>
                                <p className="text-sm font-semibold text-gray-500 uppercase">Email Address</p>
                                <p className="text-lg font-medium">{user?.email}</p>
                            </div>
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="btn btn-primary w-full mt-6 text-white"
                            >
                                Edit Profile
                            </button>
                        </div>
                    ) :
                   <EditProfileForm name={name} setName={setName}   photo={photo}   setPhoto={setPhoto}
                      handleUpdate={handleUpdate}   setIsEditing={setIsEditing}  ></EditProfileForm> }
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;