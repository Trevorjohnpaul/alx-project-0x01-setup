import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [open, setOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers([...users, user]);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      <UserModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onAddUser={handleAddUser}
        onSubmit={(post: any) => handleAddUser(post)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
