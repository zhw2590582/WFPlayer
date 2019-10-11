onmessage = event => {
    const { data, type } = event.data;
    switch (type) {
        case 'getPeaks':
            console.log(data);
            break;
        default:
            break;
    }
};
