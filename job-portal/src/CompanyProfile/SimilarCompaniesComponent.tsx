import { similar } from "../Data/Company"
import CompanyCard from "./CompanyCard"

const SimilarCompaniesComponent = () => {
  return (
    <div className="w-1/4">
        <div className="text-xl font-semibold mb-5">Similar Companies</div>
        <div className="flex flex-wrap gap-5 flex-col ">
            {
                similar.map((data, index) => <CompanyCard key={index} {...data} />)
            }
        </div>  
    </div>
  )
}

export default SimilarCompaniesComponent