import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "animate.css";
import ContainerBox from "../components/ContainerBox/ContainerBox";

const ErrorPage = () => {
  return (
    <ContainerBox>
      <Helmet>
        <title>Luxinesy | Page Not Found</title>
      </Helmet>
      <section className="relative bg-green-600/5">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <Link to={"/"}>
                  <img
                    src="https://i.ibb.co/0BGGzjz/Logo-Final-1.png"
                    className="mx-auto w-20 animate__animated animate__fadeIn animate__slideInDown"
                    alt=""
                  />
                </Link>
              </div>
              <div className=" text-center my-auto">
                <img
                  src="https://i.ibb.co/SxMVZWM/error.png"
                  className="mx-auto animate__animated animate__zoomIn"
                  alt=""
                />
                <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold animate__animated animate__zoomIn">
                  Page Not Found?
                </h1>
                <p className="text-slate-400">
                  Whoops, this is embarassing. <br />
                  Looks like the page you were looking for wasn't found.
                </p>

                <div className="mt-4">
                  <Link
                    to={"/"}
                    className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md animate__animated animate__slideInUp">
                    Back to Home
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-slate-400">
                  {new Date().getFullYear()}@ Luxinesy. Design with
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <Link
                    to={"https://github.com/JuborajSujon"}
                    target="_blank"
                    className="text-reset underline">
                    JuborajSujon
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContainerBox>
  );
};

export default ErrorPage;
