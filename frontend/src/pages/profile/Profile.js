import React, { useEffect, useLayoutEffect, useState } from "react";
import { PageMenu } from "../../components/pageMenu/PageMenu";
import { useRedirectLoggedOutUser } from "../../customHook/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  selectUser,
  updateUser,
} from "../../redux/features/auth/authSlice";
import { Loader } from "../../components/loader/Loader";
import { toast } from "react-toastify";
import { Notification } from "../../components/notification/Notification";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;

export const shortenText = (text, maxLength) => {
  if (typeof text !== "string" || text.length <= maxLength) {
    return text;
  }

  const shortened = text.substr(0, maxLength) + "...";
  return shortened;
};

export const Profile = () => {
  useRedirectLoggedOutUser("/auth");

  const dispatch = useDispatch();

  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    phone: user?.phone || "",
    bio: user?.bio || "",
    photo: user?.photo || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    let imageURL;
    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/png" ||
          profileImage.type === "image/jpg")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("upload_preset", upload_preset);
        image.append("cloud_name", cloud_name);

        //Save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dvstsvpyz/image/upload",
          { method: "POST", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      //Save profile to MongoB
      const userData = {
        firstname: profile.firstname,
        lastname: profile.lastname,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };

      dispatch(updateUser(userData));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useLayoutEffect(() => {
    if (user) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        bio: user.bio,
        photo: user.photo,
        role: user.role,
        isVerified: user.isVerified,
      }));
    }
  }, [user]);

  return (
    <>
      {isLoading && <Loader />}
      {!profile.isVerified && <Notification />}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card">
              <PageMenu />
              <div className="card-header text-center">
                <h2>Profile</h2>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    src={imagePreview === null ? user?.photo : imagePreview}
                    alt="profileImg"
                    className="rounded-circle mb-3"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <h3>Role: {profile.role}</h3>
                </div>
                <form onSubmit={saveProfile}>
                  <div className="form-group">
                    <label>Change Photo</label>
                    <input
                      type="file"
                      accept="photo/*"
                      name="photo"
                      className="form-control-file "
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-group form-group-flex">
                    <label htmlFor="firstname">First Name</label>
                    <span className="input-icon mt-4">
                      <i className="uil uil-user"></i>
                    </span>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control form-style"
                      value={profile?.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-group-flex">
                    <label htmlFor="lastname">Last Name</label>
                    <span className="input-icon mt-4">
                      <i className="uil uil-user"></i>
                    </span>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control form-style"
                      value={profile?.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-group-flex">
                    <label htmlFor="email">Email</label>
                    <span className="input-icon mt-4">
                      <i className="uil uil-at"></i>
                    </span>
                    <input
                      type="email"
                      disabled
                      id="email"
                      name="email"
                      className="form-control form-style"
                      value={profile?.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-group-flex">
                    <label htmlFor="phone">Phone</label>
                    <span className="input-icon mt-4">
                      <i className="uil uil-phone"></i>
                    </span>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control form-style"
                      value={profile?.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-group-flex">
                    <label htmlFor="bio">Bio</label>
                    <span className="input-icon">
                      <i className="uil uil-comment"></i>
                    </span>
                    <textarea
                      id="bio"
                      name="bio"
                      className="form-control form-style"
                      rows="5"
                      value={profile?.bio}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="text-center mt-3">
                    <button className="btn">Update Profile</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-muted text-center">
                <h4>User</h4>
                <p>
                  {profile.firstname} {profile.lastname}
                </p>
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>Role: {profile.role}</p>
                <p>{profile.isVerified}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const UserName = () => {
  const user = useSelector(selectUser);
  const lastName = user?.lastname || "...";
  const shortenedLastName = shortenText(lastName, 9);
  return <span>{shortenedLastName}</span>;
};
