const PostedJobCard = (props:any) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-bright-sun-300 border-l-2">
        <div className="text-sm text-mine-shaft-300">{props.jobTitle}</div>
        <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
        <div className="text-xs font-semibold">{props.posted}</div>
    </div>
  )
}

export default PostedJobCard