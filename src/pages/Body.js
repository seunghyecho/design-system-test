import Home from "../components/Home";
import Userinfo from "../components/UserInfo";
import UserMsg from "../components/UserMsg";

export default function Body() {
  return (
    <div id="body">
      <UserMsg />
      <Userinfo />
      <Home />
    </div>
  );
}
