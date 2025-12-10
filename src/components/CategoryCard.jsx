import { Link } from "react-router-dom";

export default function CategoryCard({ title, description, to }) {
  return (
    <Link to={to} className="category-card">
      <h3 className="category-title">{title}</h3>
      <p className="category-desc">{description}</p>
    </Link>
  );
}
