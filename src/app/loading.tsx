const Loading = () => {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50px',
            height: '50px',
            borderTop: '5px solid #fff',
            borderRight: '5px solid #fff',
            borderBottom: '5px solid #fff',
            borderLeft: '5px solid #5d1d85',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }} />
    );
};

export default Loading;
