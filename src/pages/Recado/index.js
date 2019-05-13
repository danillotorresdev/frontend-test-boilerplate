import React from 'react'
import {Link} from 'react-router-dom'

const Recado = props => {
    return (
        <div className='container'>
            <div className='row flex-column align-items-center'>
                <div className='col-md-8 '>
                    <div className='agradecimentos d-flex flex-column align-items-center'>
                        <img className='agradecimentos--img' src='/logo.jpg' />
                        <p className='agradecimentos--recado'>Quero agradecer a oportunidade de estar participando deste processo seletivo. Alguns pontos do projeto(como tratamento de erros) nāo consegui concluir por causa de alguns imprevistos que tive neste final de semana</p>

                        <h4 className='agradecimentos--assinatura'>Atenciosamente,<br /> Danillo Ewerton. </h4>
                        <Link className='btn btn-success mt-4' to='/home'>Vamos ao teste :)</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recado