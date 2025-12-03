import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import './index.css';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import TalentProfile from './Pages/TalentProfile';
import PostJobPage from './Pages/PostJobPage';
import JobDescription from './Pages/JobDescription';
import ApplyJob from './Pages/ApplyJob';
import CompanyPage from './Pages/CompanyPage';
import PostedJob from './Pages/PostedJob';
import JobHistory from './Pages/JobHistory';

const App = () => {
  const theme = createTheme({
    focusRing: "never",
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
      'mineShaft': ['#f9f9f9', '#e0e0e0', '#c7c7c7', '#aeaeae', '#959595', '#7c7c7c', '#636363', '#4a4a4a', '#313131', '#181818', '#000000'],
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
    },
    fontFamily: 'Poppins, sans-serif',
  })
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark' >
      <BrowserRouter>
      <div className='relative '>
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path='/find-talent' element={<FindTalent />} />
          <Route path='/talent-profile' element={<TalentProfile />} />

          <Route path='/post-job' element={< PostJobPage />} />
          <Route path ='/jobs' element={<JobDescription />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/posted-jobs' element={<PostedJob />} />
          <Route path="/job-history" element={<JobHistory/>} />
           <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App