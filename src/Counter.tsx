import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// redux
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux'
import { ActionBase, TAppState } from './models';
import { counterAsyncPlus, counterPlus } from './redux/actions';
import { trans } from './i18n/i18n';
// 

const mapStateToProps = (state: TAppState, ownProps: OwnProps): StateProps => {
    const { counter } = state.template;
    return {
        counter
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
    counter: number
}
type DispatchProps = {
    dispatch?: Dispatch<any>
}
type OwnProps = {

}
type MergeProps = {
    counter: number
} & DispatchProps
type Props = OwnProps & MergeProps

function MyComponent(props: Props) {
    const { counter } = props;
    return (
        <View style={styles.containerView}>
            <Text>{trans.test()}</Text>
            <Text>{counter}</Text>
            <Button
                title="Increment"
                onPress={() => props.dispatch(counterPlus())}
            />
            <Button
                title="Increment Async"
                onPress={() => props.dispatch(counterAsyncPlus())}
            />
            <Button
                title="Increment Async Error"
                onPress={() => props.dispatch(counterAsyncPlus({ testError: true }))}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const Counter = connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent);
export default Counter;