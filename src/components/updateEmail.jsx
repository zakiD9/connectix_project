import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const UpdateEmailDialog = ({ open, onOpenChange, currentEmail, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const [email, setEmail] = useState(currentEmail || "");

  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      await onSave(email);
      onOpenChange(false);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
          <Dialog.Title className="text-lg font-semibold mb-4">Update Email Address</Dialog.Title>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
            disabled={loading}
          />
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div className="flex justify-end gap-2 mt-4">
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" disabled={loading}>
                Cancel
              </button>
            </Dialog.Close>
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleSave}
              disabled={loading || !email}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UpdateEmailDialog;