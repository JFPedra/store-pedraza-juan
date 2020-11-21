const loadingInProgress = (bool) =>({
    type: 'LOADING',
    isLoading: bool
});
export default loadingInProgress;