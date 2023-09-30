import { Outlet } from "react-router-dom";

const MyLayout = () => {
    return (
        <div>
            <h1 className="text-5xl">This is my layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayout;