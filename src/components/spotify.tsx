"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function Spotify() {
  const handleSpotifySignup = () => {
    void signIn("github");
  };

  return (
    <div className="flex flex-col justify-center gap-2 text-center align-middle">
      Login With Spotify
      <Button
        color="success"
        size="md"
        className="rounded-2xl bg-green-500 p-4"
        onClick={handleSpotifySignup}
      >
        Login With Spotify
      </Button>
    </div>
  );
}
