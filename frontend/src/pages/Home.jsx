import { useNavigate } from "react-router-dom";

const Home = () => {
  const userName = localStorage.getItem('UserName')
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('UserName')
    navigate('/login')
  }
  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home