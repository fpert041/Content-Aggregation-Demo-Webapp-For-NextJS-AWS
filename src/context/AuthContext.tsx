/**
 * Context in React:
 * to pass data through the component tree without having to pass props down manually at every level.
 * Useful, for example, to pass user data down the app's hyerarchy for authorisation
 * https://reactjs.org/docs/context.html
 */
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import { Auth, CognitoUser } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";

// Define class interface for custom types objects
interface Props {
  children: React.ReactElement;
}

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

// Default component export
export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser) {
        setUser(amplifyUser);
      }
    } catch (error) {
      // no current signed-in user
      setUser(null);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);
  useEffect(() => {
    Hub.listen("auth", () => {
      // perform state update when an auth event is detected
      checkUser();
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom (named) component Export
export const useUser = (): UserContextType => useContext(UserContext);
