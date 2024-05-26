import { useOutletContext } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox";

function WorkPage() {
  const [enabled, setEnabled] = useOutletContext();

  const bgColor = enabled ? 'text-black ' : 'text-slate-300 '
  const style = bgColor + ' grid md:grid-cols-1 auto-rows-[300px] gap-5 my-10 mx-10 md:mx-20 lg:mx-32'
  return (
    <div className={style}>
      <DescriptionBox title="Yunex Traffic | Software Intern"  content={"During my internship I worked as part of a fully agile software development team, participating in daily standups, "
  +"planning, show/tell and retrospectives. I have developed application features using JavaScript, Java, and Python,"
  +"and worked on DevOps tasks to improve the CI/CD pipeline. The main support tools used were Jira, GitLab and "
  +"Confluence. As well as improving my development skills directly, I have learnt a great deal working with Senior "
  +"Developers through for example code reviews. The internship has also given me significant experience working "
  +"and communicating within a professional team environment."}/>
      <DescriptionBox />
      <DescriptionBox />
    </div>
  );
}

export default WorkPage;
