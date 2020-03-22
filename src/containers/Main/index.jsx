import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import { connect } from 'react-redux';

import AvailableApartments from '../../components/AvailableApartments';
import {
    getApartmentsRequest
  } from './state/actions/apartments';
import { bindActionCreators } from 'redux';

export class Main extends Component {
    componentWillMount(){
        this.props.getApartmentsRequest();
    }
    render(){
        const {totalApartments} = this.props;
        return (
            <Container>
                <AvailableApartments totalResults={totalApartments}/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    totalApartments: state.apartments.totalApartments,
    loading: state.loading,
});

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