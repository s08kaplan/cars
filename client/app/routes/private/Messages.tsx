import React from 'react'
import useGetMessageData from 'src/hooks/messages/useGetMessageData'
import useGetMessageList from 'src/hooks/messages/useGetMessageList'

const Messages = () => {
  const { data: total, isPending, isError } = useGetMessageData("count")
    const { data: unread } = useGetMessageData("unread")
     const { data: recent } = useGetMessageData("recent")
  console.log("message total number: ", total)
  console.log("message unread number: ", unread)
console.log("message recent number: ", recent)

const { data: list } = useGetMessageList()
console.log("message list : ", list)
  return (
    <div>Messages</div>
  )
}

export default Messages