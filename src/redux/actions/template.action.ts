

export const COUNTER_PLUS = 'COUNTER_PLUS';
export const COUNTER_ASYNC_PLUS = 'COUNTER_ASYNC_PLUS';
export const COUNTER_ASYNC_PLUS_DONE = 'COUNTER_ASYNC_PLUS_DONE';

export const counterPlus = () => {
    return {
        type: COUNTER_PLUS,
    }
}

export type CounterAsyncPlus = ReturnType<typeof counterAsyncPlus>;
export const counterAsyncPlus = (params?: { testError: boolean }) => {
    const { testError } = params || {};
    return {
        type: COUNTER_ASYNC_PLUS,
        payload: { testError }
    }
}

