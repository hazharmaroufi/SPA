import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const params = useParams();
  return <div>ProductDetailsPage - product#{params.id}</div>;
}

export default ProductDetailsPage;
