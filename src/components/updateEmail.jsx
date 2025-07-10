import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Button from "./button";
import SecondaryButton from "./SecondaryButton";

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
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Dialog.Content
          aria-labelledby="email-title"
          className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-sm"
        >
          <Dialog.Title id="email-title" className="text-lg font-semibold mb-4">
            Update Email Address
          </Dialog.Title>

          <input
            type="email"
            autoFocus
            required
            className="w-full border rounded px-3 py-2 mb-3 focus:outline-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
            disabled={loading}
          />

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <div className="flex justify-end gap-2 mt-4">
            <Dialog.Close asChild>
              <SecondaryButton>Cancel</SecondaryButton>
            </Dialog.Close>
            <Button
              onClick={handleSave}
              disabled={loading || !email}
              text={loading ? "Saving..." : "Save"}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UpdateEmailDialog;
