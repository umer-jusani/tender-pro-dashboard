import { Backdrop, CircularProgress } from '@mui/material';

function Loader() {
    return (
        <Backdrop sx={(theme) => ({ color: '#fff', zIndex: 15000 })} open={true}>
            <CircularProgress color="primary" />
        </Backdrop>
    );
}

export default Loader;
