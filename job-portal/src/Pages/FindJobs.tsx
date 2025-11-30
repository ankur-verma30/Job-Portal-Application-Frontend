import Jobs from "../FindJobs/Jobs"
import SearchBar from "../FindJobs/SearchBar"

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
        <SearchBar/>
        <Jobs/>
        <div>Hello world!</div>
    </div>
  )
}

export default FindJobs