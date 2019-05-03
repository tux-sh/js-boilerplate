import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/RootActions';

import '../../public/styles/Root.postcss';

const Root = ({ value, increase, decrease }) => (
    <>
        <button onClick={increase}>increase</button>
        <span>{value}</span>
        <button onClick={decrease}>decrease</button>
    </>
);

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    increase,
    decrease
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
