import { talents } from "../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"

const CompanyEmployeesComponent = () => {
  return (
    <div className="flex mt-10 flex-wrap gap-10 justify-center">
        {talents.map((talent, index) => (
            index<6 && <TalentCard key={index} {...talent} />
        ))}
    </div>
  )
}

export default CompanyEmployeesComponent