import { useParams, Navigate } from "react-router-dom";
import { SolutionPageLayout } from "@/components/SolutionPageLayout";
import { getSolutionBySlug } from "@/data/solutionPages";

const SolutionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const solution = getSolutionBySlug(slug);
  
  if (!solution) {
    return <Navigate to="/404" replace />;
  }

  return <SolutionPageLayout solution={solution} />;
};

export default SolutionPage;
