import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import appStore from "../../store/appStore";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LOGO } from "../../utils/constants";
import { USER_AVATAR } from "../../utils/constants";
import { toggleGptView } from "../../store/moviesSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptView = useSelector((store) => store.movies.showGptView);
  const navigate = useNavigate();
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleGptView = () => {
    dispatch(toggleGptView());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user. logged in", user, auth);

        const { displayName, email } = user;
        dispatch(addUser({ displayName, email }));
        navigate("/browse");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    //calls when component unmounts
    return () => unscubscribe();
  }, []);
  return (
    <div className="px-16 py-4 bg-gradient-to-b from-black fixed top-0 z-10 flex justify-between w-full">
      <img src={LOGO} alt="logo" className="w-32 " />
      {user && (
        <div className="flex gap-4">
          <button
            className="bg-red-700 p-2 text-white rounded-lg font-semibold"
            onClick={handleGptView}
          >
            {gptView ? "Browse" : "Search"}
          </button>
          <div
            className="bg-slate-800 flex rounded-md cursor-pointer"
            onClick={handleShowMenu}
          >
            <img
              src={USER_AVATAR}
              alt="user logo"
              className="w-10 rounded-md"
            />
            <span className="p-2 text-white">⌄</span>
            {showMenu && (
              <div className="bg-slate-800 rounded-md text-white p-2 absolute top-16 right-3">
                <div onClick={handleSignout}>Sign Out</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
