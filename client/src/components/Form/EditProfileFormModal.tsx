import { useUpdateUser } from "../../hooks/auth-hooks/useUpdateUser";
import { updateInputs } from "./ProfileUpdateInputs";
import { useState } from "react";
import {
  Edit3,
  X,
  User,
  Camera,
  Save,
  Link as LinkIcon,
  Upload,
} from "lucide-react";

type Props = {
  firstName: string;
  lastName: string;
  image?: string;
  contactNumber: string;
  userId: string;
};

const EditProfileFormModal = ({
  firstName,
  lastName,
  image,
  contactNumber,
  userId,
}: Props) => {
  const { mutateAsync: updateUser, isPending } = useUpdateUser();

  const [formData, setFormData] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    image: image || "",
    contactNumber: contactNumber || "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(image || "");
  const [activeTab, setActiveTab] = useState<"file" | "url">("file");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    /* console.log("input values: ", name, value) */
    if (name === "image") {
      setPreviewUrl(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateUser({
        userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        image: activeTab === "url" ? formData.image : undefined,
        file: activeTab === "file" ? selectedFile : null,
      });

      const modal = document.getElementById("edit-profile");
      if (modal && "hidePopover" in modal) {
        (modal as any).hidePopover();
      }
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <>
      <button
        popoverTarget="edit-profile"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-cyan-400 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-md"
      >
        <Edit3 className="w-4 h-4" /> Edit Profile
      </button>

      <div
        id="edit-profile"
        popover="auto"
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800/80 bg-slate-950/90 text-slate-100 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl backdrop:bg-slate-950/70"
      >
        <header className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <User className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Edit Profile
            </h2>
          </div>

          <button
            type="button"
            popoverTarget="edit-profile"
            popoverTargetAction="hide"
            className="rounded-xl p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar Preview */}
          <div className="flex flex-col items-center gap-4 py-2">
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 p-1 shadow-xl overflow-hidden flex items-center justify-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Profile Preview"
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-cyan-400">
                    <User className="w-10 h-10" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 text-cyan-400 p-1.5 rounded-xl shadow-md">
                <Camera className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab("file")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "file"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Upload className="w-3.5 h-3.5" /> Upload File
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("url")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "url"
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" /> Image URL
              </button>
            </div>

            {/* Conditional Input Rendering */}
            {activeTab === "file" ? (
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full max-w-xs text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-900 file:text-cyan-400 border border-slate-800/80 rounded-xl bg-slate-900/40 p-1 cursor-pointer"
              />
            ) : (
              <input
                type="text"
                name="image"
                placeholder="https://unsplash.com/car.webp"
                value={formData.image}
                onChange={handleChange}
                className="w-full max-w-xs rounded-xl bg-slate-900/80 border border-slate-800 px-3.5 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
              />
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {updateInputs.map(({ name, type, label }) => (
              <div id={name} className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  {label}
                </label>
                <input
                  name={name}
                  value={`${formData[name as keyof typeof formData] ?? ""}`}
                  type={type}
                  required
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-500 transition-all"
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <footer className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800/80">
            <button
              type="button"
              popoverTarget="edit-profile"
              popoverTargetAction="hide"
              className="px-4 py-2 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Save className="w-4 h-4" />{" "}
              {isPending ? "Saving..." : "Save Changes"}
            </button>
          </footer>
        </form>
      </div>
    </>
  );
};

export default EditProfileFormModal;
