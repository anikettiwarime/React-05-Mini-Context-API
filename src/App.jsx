import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <div className="flex items-center space-x-2 w-full justify-center ">
        <h1 className="text-4xl capitalize font-medium text-gray-900">
          Context Api Demo example
        </h1>
      </div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
