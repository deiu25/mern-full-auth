import React, { useState } from "react";
import profileImg from "../../assets/avatarr.png";

const initialState = {
    name: "Deiu",
    email: "d3iu25@gmail.com",
    phone: "",
    bio: "",
    image: "",
    role: "",
    isVerified: false,
};

export const Profile = () => {
    const [profile, setProfile] = useState(initialState)
    const handleImgChange = (e) => {}
    const handleInputChange = (e) => {}
  
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="card">
                        <div className="card-header text-center">
                            <h2>Profile</h2>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img src={profileImg} alt="Avatar" className="rounded-circle mb-3" style={{ width: "150px", height: "150px" }} />
                                <h3>Role: {profile.role}</h3>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label>Change Photo</label>
                                    <input type="file" accept="image/*" name="image" className="form-control-file" onChange={handleImgChange} />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" value={profile.name} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" disabled name="email" className="form-control" value={profile.email} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" disabled name="phone" className="form-control" value={profile.phone} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Bio</label>
                                    <textarea name="bio" className="form-control" rows="5" value={profile.bio} onChange={handleInputChange}></textarea>
                                </div>  
                                <div className="text-center mt-3">
                                <button className="btn">Update Profile</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <h4>Username</h4>
                            <p>{profile.name}</p>
                            <p>{profile.email}</p>
                            <p>{profile.phone}</p>
                            <p>{profile.role}</p>
                            <p>{profile.bio}</p>
                            <p>{profile.isVerified}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
