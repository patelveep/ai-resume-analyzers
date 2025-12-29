import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";
import {resumes} from "../../Constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Checker" },
    { name: "description", content: "Check your resume with smart app" },
  ];
}

export default function Home() {

  const {isLoading, auth} = usePuterStore();

  const navigate = useNavigate();

  useEffect(() => {

    if (auth.isAuthenticated) navigate('/auth?next=/');

  }, [auth.isAuthenticated]);
  return <main  className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading">
      <h1>Track the resume</h1>
        <h2> Check your resume with smart AI</h2>


      </div>



    {resumes.length > 0 && (

        <div className="resumes-section">
          {resumes.map((resume, index) => (

              <ResumeCard key={resume.id} resume={resume}/>

          ))}

        </div>


    )}


    </section>
  </main>;
}
