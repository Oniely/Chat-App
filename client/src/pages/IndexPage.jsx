import IndexHeader from "../components/IndexHeader";
import SearchChat from "../components/SearchChat";
import ChatBoxes from "../components/ChatBoxes";
import IndexFooter from "../components/IndexFooter";
// import { useContext } from "react";
// import { UserContext } from "../UserContext";
// import { Navigate } from "react-router-dom";

export default function IndexPage() {
  // const { user } = useContext(UserContext);

  // if (!user) {
  //   return <Navigate to={'/login'} />
  // }

  return (
    <div className="relative min-h-screen">
      <IndexHeader />
      <SearchChat />
      <ChatBoxes />
      <IndexFooter />
    </div>
  );
}
