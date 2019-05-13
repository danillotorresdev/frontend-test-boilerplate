import React, { Component } from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../../redux/actionCreators'

class Years extends Component {

    state = {
        year: ''
    }

    componentDidMount() {
        this.props.loadYears()
    }

    handleChange = event => {
        this.setState({
            year: event.target.value
        })
    }
    handleSendYear = (e) => {
        e.preventDefault()

        let year = this.state.year

        let yearCode = year.toString()

        this.props.receiveYearCode({
            yearCode: yearCode
        })
        this.props.changeStep({
            step: 4
        })

    }

    render() {
        return (

            <React.Fragment>
                    <h3 className='titulo'>Selecione o ano</h3>
                    <form className='form-group d-flex flex-column align-items-center' >
                        <select value={this.state.year} className='custom-select mt-4' onChange={this.handleChange}>
                        <option defaultValue>Selecione o ano</option>
                            {this.props.years.yearsData.map(
                                year =>
                                    <option key={year.codigo} value={year.codigo}>{year.nome}</option>
                            )}
                        </select>
                        <button onClick={(e) => this.handleSendYear(e)} className='btn btn-primary mt-4'>Próximo</button>
                    </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        years: state.years,
        yearCode: state.yearCode
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadYears: () => dispatch(ActionCreators.getYearsRequest()),

        changeStep: (step) => dispatch(ActionCreators.changeStep(step)),
        saveYearCode: (yearCode) => dispatch(ActionCreators.saveYearCode(yearCode)),
        receiveYearCode: (yearCode) => dispatch(ActionCreators.receiveYearCode(yearCode))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Years);


