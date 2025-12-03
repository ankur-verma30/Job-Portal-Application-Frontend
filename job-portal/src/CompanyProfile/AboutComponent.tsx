import { Link } from "react-router-dom"
import { companyData } from "../Data/Company"

const AboutComponent = () => {
  const company: { [key: string]: any } = companyData
  return (
    <div className="flex flex-col gap-5">
      {
        Object.keys(company).map((key: string, index: number) => (
          key != 'Name' && <div key={index}>
            <div className="mb-3 font-semibold text-xl">{key}</div>
            {key != 'Website' ? <div className="text-sm text-mine-shaft-300 text-justify">{key != 'Specialties' ? company[key] : company[key].map((items: string, index: number) => <span key={index}>  {items} {index >= 0 && index<company[key].length-1 && <span>&bull;</span>}</span>)}
            </div> : <Link target="_blank" className="text-sm text-bright-sun-400 text-justify" to={company[key]}>{company[key]}</Link>}
          </div>
        ))
      }
    </div>
  )
}

export default AboutComponent