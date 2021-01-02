import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// redux
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux'
import { ActionBase, TAppState } from './redux/models';
// 

const mapStateToProps = (state: TAppState, ownProps: OwnProps): StateProps => {
    return {

    };
}
const mapDispatchToProps = (dispatch: Dispatch<ActionBase>, ownProps: OwnProps): DispatchProps => {
    return {
        dispatch
    };
}
const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): MergeProps => {
    return {
        ...dispatchProps,
        ...ownProps
    }
}
type StateProps = {

}
type DispatchProps = {
    dispatch?: Dispatch<any>
}
type OwnProps = {

}
type MergeProps = {

} & DispatchProps
type Props = OwnProps & MergeProps

function MyComponent(props: Props) {
    return (
        <View>
            Template
        </View>
    );
}



const styles = StyleSheet.create({

});

export const Template = connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent);
export default Template;