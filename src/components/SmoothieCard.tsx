import supabase from "../config/supabaseClient"
import { Link, useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SmoothieCard = ({ smoothie, onDelete }) => {
  const navigate = useNavigate()

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('smoothies')
      .delete()
      .eq('id', smoothie.id)
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      onDelete(smoothie.id)
    }
  }

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <i className="material-icons"><EditIcon /></i>
        </Link >
        <Link to={"/create"}>
            <i className="material-icons" onClick={handleDelete}><DeleteIcon /></i>
        </Link>
      </div>
    </div>
  )
}

export default SmoothieCard