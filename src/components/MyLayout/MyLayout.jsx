import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MyLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayout;