
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'
const Start = () => {
    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            {/* Main container */}
            <div className="w-[400px] h-[750px] rounded-md shadow-md overflow-hidden">
                {/* Background image */}
                <div className="bg-cover bg-center h-[600px] bg-[url('/landingPage.jpg')] flex items-start p-6">
                    <h2 className="text-2xl font-semibold text-white">Uber</h2>
                </div>
                {/* White bottom section */}
                <div className="bg-white h-[150px] p-6 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold">Get Started with Uber</h2>
                    <Link to='/login'>
                        <button className="w-full bg-black text-white font-semibold py-3 text-xl rounded-md flex items-center justify-center">
                            Continue  <ArrowRight className="ml-2 w-8 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Start;
