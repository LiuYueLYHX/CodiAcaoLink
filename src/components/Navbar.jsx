import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/home">首页</Link> | 
      <Link to="/about">关于</Link> | 
      <Link to="/contact">联系</Link>
    </nav>
  );
}