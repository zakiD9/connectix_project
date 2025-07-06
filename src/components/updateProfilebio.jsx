import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { updateBio } from "../services/userService";

const UpdateBioPopup = ({ open, onOpenChange, currentBio, onSave }) => {
  const [bio, setBio] = useState(currentBio || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      await updateBio(bio);
      onSave(bio);
      onOpenChange(false);
    } catch (err) {
      setError("Failed to update bio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <Dialog.Title className="text-lg font-semibold mb-4">Update Bio</Dialog.Title>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full border rounded px-3 py-2 mb-3 resize-y"
            disabled={loading}
          />
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <Dialog.Close asChild>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" disabled={loading}>
                Cancel
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UpdateBioPopup;