import useGetMessageData from "src/hooks/messages/useGetMessageData";
import useUpdateMessageStatus from "src/hooks/messages/useUpdateMessageStatus";

export interface Message {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  isRead: boolean;
}

export const useMessagesPage = () => {
  const { data: totalData, isPending: isTotalPending } = useGetMessageData("count");
  const { data: unreadData, isPending: isUnreadPending } = useGetMessageData("unread");
  const { data: recentData, isPending: isRecentPending } = useGetMessageData("recent");

  const toggleStatusMutation = useUpdateMessageStatus();

  const handleToggleStatus = (id: string, currentStatus: boolean) => {
    const currentMessage = recentData?.data?.find((m: Message) => m._id === id);
    const latestStatus = currentMessage ? currentMessage.isRead : currentStatus;
    
    const nextStatus = !latestStatus;
    console.log(`Toggling message ${id} from ${currentStatus} to ${nextStatus}`);
    
    toggleStatusMutation.mutate({ id, isRead: nextStatus });
  };

  const unreadCount = unreadData?.data ?? 0;
  const recentCount = recentData?.data?.length ?? totalData?.data ?? 0;
  const totalCount = totalData?.data ?? 0;
  const messageDetails: Message[] = recentData?.data ?? [];

  const isLoading = isTotalPending || isUnreadPending || isRecentPending;

  return {
    unreadCount,
    recentCount,
    totalCount,
    messageDetails,
    isLoading,
    handleToggleStatus,
    updatingId: toggleStatusMutation.isPending ? toggleStatusMutation.variables?.id : null,
  };
};