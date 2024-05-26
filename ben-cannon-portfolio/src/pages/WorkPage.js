import { useOutletContext } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";

function WorkPage() {
  const [enabled] = useOutletContext();

  const bgColor = enabled ? 'bg-neutral-100 text-black ' : 'bg-zinc-800 text-slate-300 '
  const boxStyle = bgColor + 'border-4 rounded-xl p-2 flex flex-col h-screen items-center justify-start';
  
  const style = 'grid md:grid-cols-1 auto-rows-[300px] flex flex-col h-screen gap-5 my-10 mx-10 md:mx-20 md:my-12 lg:mx-32 lg:my-16'
  return (
    <div className={style}>
      <div className={boxStyle}>
        <DescriptionBox title="Yunex Traffic | Software Intern"  content={"During my internship I worked as part of a fully agile software development team, participating in daily standups, "
    +"planning, show/tell and retrospectives. I have developed application features using JavaScript, Java, and Python,"
    +"and worked on DevOps tasks to improve the CI/CD pipeline. The main support tools used were Jira, GitLab and "
    +"Confluence. As well as improving my development skills directly, I have learnt a great deal working with Senior "
    +"Developers through for example code reviews. The internship has also given me significant experience working "
    +"and communicating within a professional team environment."}/>
      </div>
    </div>
  );
}

export default WorkPage;
