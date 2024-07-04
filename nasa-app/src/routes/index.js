import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Apod, MarsRoverPhotos } from '../pages';

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apod" element={<Apod />} />
                <Route path="/mars-rover" element={<MarsRoverPhotos />} />
            </Routes>
        </Router>
    );
}

export default PageRoutes;