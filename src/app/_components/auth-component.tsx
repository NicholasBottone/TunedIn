"use client";

import { api } from "~/trpc/react";

export default function AuthComponent() {
  const refreshTopTracksMutation = api.user.refreshTopTracks.useMutation();

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
