import { useParams, Navigate } from "react-router-dom";
import { SubServicePageLayout } from "@/components/SubServicePageLayout";
import { getSubService } from "@/data/subServicePages";

const SubProductPage = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();
  
  if (!categorySlug || !productSlug) {
    return <Navigate to="/404" replace />;
  }

  const subService = getSubService(categorySlug, productSlug);
  
  if (!subService) {
    return <Navigate to="/404" replace />;
  }

  return <SubServicePageLayout subService={subService} />;
};

export default SubProductPage;
