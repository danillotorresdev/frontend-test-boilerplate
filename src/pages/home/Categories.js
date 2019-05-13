import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'


class Category extends Component {

    state = {
        categoria: '',
        categorias: ['carros', 'motos', 'caminhoes']
    }

    componentDidMount() {
    }

    handleChange = event => {
        this.setState({
            categoria: event.target.value
        })
    }
    handleSendCategory = (e) => {
        e.preventDefault()
        let category = this.state.categoria

        this.props.saveCategory({
            category: category
        })
        this.props.receiveCategory({
            category: category
        })
        this.props.changeStep({
            step: 1
        })

    }


    render() {
        return (

            <React.Fragment>
                <React.Fragment>

                    <h3 className='titulo'>Selecione a Categoria</h3>
                    <form className='form-group d-flex flex-column align-items-center' >
                        <select value={this.state.categoria} className='custom-select mt-4' onChange={this.handleChange}>
                           <option defaultValue>Selecione a categoria</option>
                            {this.state.categorias.map(
                                (categoria, index) =>
                                    <option key={index}>{categoria}</option>
                            )}
                        </select>
                        <button onClick={(e) => this.handleSendCategory(e)} className='btn btn-primary mt-4'>Próximo</button>
                    </form>

                </React.Fragment>
            </React.Fragment>
        )
    }


}

const mapStateToProps = state => {
    return {
        brands: state.brands,
        brandCode: state.brandCode
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveCategory: (category) => dispatch(ActionCreators.saveCategory(category)),
        receiveCategory: (category) => dispatch(ActionCreators.receiveCategory(category)),
        changeStep: (step) => dispatch(ActionCreators.changeStep(step)),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Category);