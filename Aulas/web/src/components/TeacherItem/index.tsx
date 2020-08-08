import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://scontent.frao1-2.fna.fbcdn.net/v/t1.0-9/16939569_913970548706221_3249603395029614607_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=UICph675Uo8AX-PTZvO&_nc_ht=scontent.frao1-2.fna&oh=ad53155d94d9565bc9a06ddd61927a19&oe=5F5645F1" alt="João Vitor"/>
                <div>
                    <strong>João Vitor</strong>
                    <span>Estrutura de Dados</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                <br/><br/>
                Nulla gravida commodo felis, euismod placerat enim hendrerit ut. 
                Proin vitae rutrum magna. In hendrerit ligula eu lacus convallis finibus. 
                Morbi egestas.     
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt=""/>Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem