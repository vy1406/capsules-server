export const formatDate = (date) => {
  const toDate = new Date(date)
  return toDate.getDate()  + "-" + (toDate.getMonth()+1) + "-" + toDate.getFullYear()
}

export const selectWithoutPassword = 'id username color isTeamLeader teamId'