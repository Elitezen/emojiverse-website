import Downloader from "../Downloader";
import Features from "../Features";
import Footer from "../Footer";
import Header from "../Header";
import Showcase from "../Showcase";
import Statistics from "../Statistics";

import '../../App.scss';

function Home() {
    return (
        <>
            <Header />
          	<Showcase />
			<Statistics />
            <Features />
            <Downloader />
            <Footer />
        </>
    )
}

export default Home;