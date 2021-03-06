import axios from 'axios';
import { toast } from 'react-toastify';
import iconNote from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import '../Button/style.css';

type ButtonProps = {
  id: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(() => {
      toast.info("SMS sendo preparado...")
    })
    setTimeout(() => {
      toast.success("Envio concluído com sucesso!")

    }, 1000*6)
}


export default function Button(props: ButtonProps) {
  return (
    <div>
      <img
        className="notification-logo"
        onClick={() => handleClick(props.id)}
        src={iconNote}
        alt="Notificar"
      />
    </div>
  )
}