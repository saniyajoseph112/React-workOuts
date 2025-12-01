import { useDispatch, useSelector } from "react-redux";
import { login } from "./useSlice";



const User = () => {
  const uses = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {uses ? `Welcome, ${uses.name}` : "No user"}
      </h1>
      <button
        onClick={() =>
          dispatch(
            login({ name: "saniya", email: "saniyajoseph@gmail.com" })
          )
        }
      >
        ok
      </button>
    </div>
  );
};

export default User;
