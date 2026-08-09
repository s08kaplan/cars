import React from "react";
import { Mail, Inbox, Clock } from "lucide-react";
import MessageCard from "src/components/Card/MessageCard";
import { useMessagesPage, type Message } from "src/hooks/messages/useMessagesPage";

const Messages = () => {
  const {
    unreadCount,
    recentCount,
    totalCount,
    messageDetails,
    isLoading,
    handleToggleStatus,
    updatingId,
  } = useMessagesPage();

  return (
    <section className="mx-auto max-w-5xl space-y-4 p-4">
      {/* Header Stats */}
      <header className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-400">
          <Mail className="h-4 w-4" />
          <span>Unread:</span>
          <span className="font-bold">{unreadCount}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-sm font-medium text-amber-400">
          <Clock className="h-4 w-4" />
          <span>Recent:</span>
          <span className="font-bold">{recentCount}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-300">
          <Inbox className="h-4 w-4" />
          <span>Total:</span>
          <span className="font-bold">{totalCount}</span>
        </div>
      </header>

      {/* Messages List Container */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3 shadow-xl backdrop-blur-sm">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 p-8 text-sm text-slate-400">
            <Clock className="h-4 w-4 animate-spin text-amber-500" />
            <span>Loading messages...</span>
          </div>
        ) : messageDetails.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 p-8 text-slate-400">
            <Inbox className="h-8 w-8 text-slate-600" />
            <p className="text-sm">No messages found.</p>
          </div>
        ) : (
          messageDetails.map((m: Message) => (
            <MessageCard
              key={m._id}
              id={m._id}
              firstName={m.firstName}
              lastName={m.lastName}
              email={m.email}
              title={m.title}
              content={m.content}
              createdAt={m.createdAt}
              updatedAt={m.updatedAt}
              isRead={m.isRead}
              onToggleStatus={() => handleToggleStatus(m._id, m.isRead)}
              isUpdating={updatingId === m._id}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Messages;