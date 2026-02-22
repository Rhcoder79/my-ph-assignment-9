import React from 'react';

const EditProfileForm = ({ name, setName, photo, setPhoto, handleUpdate, setIsEditing }) => {
    return (
        <form onSubmit={handleUpdate} className="w-full space-y-4">
            <div className="form-control text-left">
                <label className="label"><span className="label-text font-bold">Name</span></label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full" 
                    required 
                />
            </div>
            <div className="form-control text-left">
                <label className="label"><span className="label-text font-bold">Photo URL</span></label>
                <input 
                    type="text" 
                    value={photo} 
                    onChange={(e) => setPhoto(e.target.value)}
                    className="input input-bordered w-full" 
                    required 
                />
            </div>
            <div className="flex gap-2 mt-4">
                <button type="submit" className="btn btn-success flex-1 text-white">Save Changes</button>
                <button 
                    type="button" 
                    onClick={() => setIsEditing(false)} 
                    className="btn btn-ghost"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditProfileForm;