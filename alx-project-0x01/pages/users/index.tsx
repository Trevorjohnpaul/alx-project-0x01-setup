import Header from "@/components/layout/Header";
import React from "react";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Users Page</h1>
        {/* Add your users content here */}
      </main>
    </div>
  );
};

export default Users;
