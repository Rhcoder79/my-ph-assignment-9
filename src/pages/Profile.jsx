import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center px-4">
            <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300">
                <figure className="px-10 pt-10">
                    {/* User Profile Image */}
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

                    <div className="card-actions mt-6 w-full">
                        <button 
                            onClick={() => navigate('/update-profile')}
                            className="btn btn-primary w-full text-white font-bold"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;