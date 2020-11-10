import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
	component: Component,
	auth: { isLogin, loading },
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin === null || loading ? (
					<div>Loading...</div>
				) : !isLogin ? (
					<Redirect to="/" />
				) : (
					<Component {...props} />
				)}
		/>
	);
};

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})( PrivateRoute );