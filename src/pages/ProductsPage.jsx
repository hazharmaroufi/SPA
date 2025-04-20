import NavBar from "../components/NavBar";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

function ProductsPage() {
  const [searchParams, setsearchParams] = useSearchParams();
  const navigate = useNavigate();

  const sortHandler = () => {
    setsearchParams({ campaign: "Internal" });
  };
  //   const query = useSearchParams();
  const campaign = searchParams.get("campaign");
  console.log(campaign);

  const homeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={sortHandler}>sort</button>
      <NavBar />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={homeHandler}>Go Home</button>
    </div>
  );
}

export default ProductsPage;
