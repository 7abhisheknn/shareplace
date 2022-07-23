import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image:
        "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
      places: 3,
    },
    {
      id: "u2",
      name: "Manu",
      image:
        "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
}
export default Users;
