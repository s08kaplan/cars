import { Clock, Mail, MailOpen, Send, User, CheckCircle2, Circle } from "lucide-react";

interface MessageCardProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isRead: boolean;
  onToggleStatus: () => void;
  isUpdating?: boolean;
}

const MessageCard = ({
  id,
  firstName,
  lastName,
  email,
  title,
  content,
  createdAt,
  isRead,
  onToggleStatus,
  isUpdating,
}: MessageCardProps) => {
  const dateFormatter = new Intl.DateTimeFormat("tr-Tr", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div className="group relative flex flex-col justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-800/50 hover:text-white hover:shadow-lg hover:shadow-amber-500/5">
      <div className="flex flex-col space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            {isRead ? (
              <MailOpen className="h-4 w-4 text-slate-500 shrink-0" />
            ) : (
              <Mail className="h-4 w-4 text-red-400 shrink-0" />
            )}
            <h3 className="font-semibold text-slate-100">{title}</h3>
          </div>

          {/* Action Button replacing the Radio Input */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onToggleStatus}
              disabled={isUpdating}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                isRead
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/20"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/20"
              }`}
            >
              {isRead ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Read</span>
                </>
              ) : (
                <>
                  <Circle className="h-3.5 w-3.5 text-amber-400" />
                  <span>Mark as Read</span>
                </>
              )}
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed pl-6">{content}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60 pt-3 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 font-medium text-slate-200">
            <User className="h-3.5 w-3.5 text-slate-400" />
            {firstName} {lastName}
          </span>
          <span>•</span>
          <a href="mailto:{email}" className="flex items-center gap-1 text-slate-400">
            <Send className="h-3 w-3 text-slate-500"/>
            {email}
          </a>
        </div>
        <time className="flex items-center gap-1 text-slate-500">
          <Clock className="h-3 w-3" />
          {dateFormatter.format(new Date(createdAt))}
        </time>
      </div>
    </div>
  );
};

export default MessageCard;