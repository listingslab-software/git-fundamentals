
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from './AppShell.Style';
import {
    LoginForm,
} from '../index';
import {
    LinearProgress,
} from '@material-ui/core/';

class AppShell extends Component {  
    
    render (){
        const { 
            classes,
            loading,
        } = this.props;
        const {
            user,
        } = this.props.store.auth;
        
        // console.log ('loading', loading);
        // const loading = false;
        
        return (
            <div className={cn(classes.app)}>
                <div className={cn(classes.loading)}>
                    { loading ? <LinearProgress /> : null}
                </div>
                { user === null ? 
                    <LoginForm /> 
                : 
                    <div>hello</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        store,
        loading: store.top.loading,
	};
};

export default (
	connect(
		mapStateToProps,
        null
	)(withStyles(styles, { withTheme: true })(AppShell))
);
