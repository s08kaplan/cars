import React from "react";
import {
  Car,
  User,
  ShieldCheck,
  Mail,
  MapPin,
  Calendar,
  Edit3,
  BookUser,
} from "lucide-react";
import { useAuth } from "src/hooks/auth-hooks/useAuth";
import EditProfileFormModal from "src/components/Form/EditProfileFormModal";

const Profile = () => {
  const { user } = useAuth();
  console.log(" user in profile: ", user);
  /*  console.log("store user in profile: ", storeUser); */

  return (
    <section className="min-h-[calc(100vh-64px)] p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-8 bg-slate-950 text-slate-100">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
        {/* Decorative Top Accent Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-r from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-xl" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 pt-4">
          {/* Avatar Container (Car Icon Fallback) */}
          <div className="relative group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-slate-900 border-2 border-cyan-500/40 p-1 shadow-2xl flex items-center justify-center overflow-hidden">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                /* Sleek Metallic Car Avatar Fallback */
                <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-950 rounded-xl flex flex-col items-center justify-center text-cyan-400 gap-1 border border-slate-800">
                  <Car className="w-12 h-12 text-cyan-400 stroke-[1.5]" />
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    DRIVE
                  </span>
                </div>
              )}
            </div>

            {/* Role Badge Overlay */}
            <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700/80 text-cyan-400 p-1.5 rounded-xl shadow-lg">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* User Name & Quick Meta */}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {user?.firstName} {user?.lastName}
                </h1>
                <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mt-0.5">
                  {user?.role === 1 ? "Administrator" : "User Account"}
                </p>
              </div>

             {/*  <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-cyan-400 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer self-center sm:self-auto shadow-md">
                <Edit3 className="w-3.5 h-3.5" /> Edit Profile
              </button> */}
              <EditProfileFormModal
                firstName={user?.firstName!}
                lastName={user?.lastName!}
                image={user?.image}
                contactNumber={user?.contactNumber!}
                userId={user?.id!}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Info Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800/80 pb-3">
              Account Details
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{user?.email}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <BookUser className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{user?.contactNumber}</span>
              </div>

              {user?.createdAt && (
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Joined {user.createdAt}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800/80 pb-3">
              About
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {user.bio}
            </p>
          </div> */}

          {/* Quick Stats Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1 backdrop-blur-xl">
              <p className="text-xs text-slate-400 font-medium">
                System Status
              </p>
              <p className="text-lg font-bold text-emerald-400">Active</p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1 backdrop-blur-xl">
              <p className="text-xs text-slate-400 font-medium">Access Level</p>
              <p className="text-lg font-bold text-cyan-400">
                {user?.role === 1 ? "Level 1 (Admin)" : "Standard"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
