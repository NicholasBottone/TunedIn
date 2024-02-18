"use client";

import { signIn } from "next-auth/react";
import { api } from "~/trpc/react";

export default function AuthComponent() {
  const refreshTopTracksMutation = api.user.refreshTopTracks.useMutation();
  if (
    refreshTopTracksMutation.error?.message ===
    "Token expired, please re-authenticate"
  ) {
    void signIn("spotify");
  }

  return (
    <div>
      <button onClick={() => refreshTopTracksMutation.mutate()}>
        Refresh top tracks
      </button>

      {refreshTopTracksMutation.error && (
        <div>{refreshTopTracksMutation.error.message}</div>
      )}
    </div>
  );
}
