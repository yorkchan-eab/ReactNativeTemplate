import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// redux
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux'
import { ActionBase, TAppState } from './redux/models';
// 

const mapStateToProps = (state: TAppState, ownProps: OwnProps): StateProps => {
    const { loading } = state;
    return {
        loading
    };
}
const mapDispatchToProps = (dispatch: Dispatch<ActionBase>, ownProps: OwnProps): DispatchProps => {
    return {
        dispatch
    };
}
const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): MergeProps => {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps
    }
}
type StateProps = {
    loading: boolean
}
type DispatchProps = {
    dispatch?: Dispatch<any>
}
type OwnProps = {

}
type MergeProps = {

} & DispatchProps & StateProps
type Props = OwnProps & MergeProps

function MyComponent(props: Props) {
    if (!props.loading) {
        return null;
    }
    return (
        <View style={[styles.container, { backgroundColor: "rgba(52,52,52,0.5)" }]}>
            <View style={styles.background}>
                <ActivityIndicator
                    color={'white'}
                    size={'large'}
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: null,
        width: null,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    textContent: {
        top: 80,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export const Loading = connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent);
export default Loading;