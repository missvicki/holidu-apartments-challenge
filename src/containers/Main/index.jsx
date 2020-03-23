import React, {Component} from 'react';
import {Grid, Container} from 'semantic-ui-react';
import { connect } from 'react-redux';

import AvailableApartments from '../../components/AvailableApartments';
import ApartmentList from '../../components/ApartmentList';
import './main.css';
import {
    getApartmentsRequest
  } from './state/actions/apartments';
import { bindActionCreators } from 'redux';

export class Main extends Component {
    componentDidMount(){
        this.props.getApartmentsRequest();
    }
    render(){
        const {totalApartments, apartments} = this.props;
        return (
            <Container>
                <AvailableApartments totalResults={totalApartments}/>
                <Grid columns={4} className="gridList">
                    <ApartmentList apartments={apartments} className="cardItem"/>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    totalApartments: state.apartmentsReducer.totalApartments,
    apartments: state.apartmentsReducer.apartments,
    loading: state.apartmentsReducer.loading
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    getApartmentsRequest
    // add other watcher sagas to this object to map them to props
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);