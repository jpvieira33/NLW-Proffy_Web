import React  from 'react'

import WhatsIcons from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

 interface TecaherItemProps {
    teacher:Teacher
}

const TeacherItem: React.FC<TecaherItemProps> = ({teacher}) => {
    function createNewConncetion(){
        api.post('connections',{
            user_id: teacher.id
        })
    }

 return(
    <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name} />
            <div>
                 <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
            <p>
                Preço/Hora:
                <strong>R${teacher.cost}</strong>
            </p>
             <a target="_blank" onClick={createNewConncetion} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={WhatsIcons} alt="whatsapp" />
                Entrar em contato
            </a>
        </footer>
    </article>
  )
}

export default TeacherItem