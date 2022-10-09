import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "sample",
  email: "aa",
  address: "test"
};

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>FetchData</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Failed get data</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
