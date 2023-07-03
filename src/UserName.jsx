import { useRef } from "react";
import "./App.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const UserName = ({ setUserName }) => {
  const userNameRef = useRef();

  const userNameHandler = (e) => {
    e.preventDefault();

    if (userNameRef.current.value === "") {
      return toast.error("Veuillez rentrer un nom!");
    }

    const form = document.querySelector("#username-form");
    form.classList.add("fade-out-animation");

    setTimeout(() => {
      setUserName(userNameRef.current.value.trim().toLocaleUpperCase());
    }, 700);
  };

  return (
    <div className="username-form-wrapper">
      <form className="username-content" id="username-form">
        <input
          type="text"
          placeholder="Entrez votre nom!"
          required
          ref={userNameRef}
        />
        <button
          type="submit"
          className="send-user-btn"
          onClick={userNameHandler}
        >
          <HiArrowNarrowRight />
        </button>
      </form>
    </div>
  );
};
