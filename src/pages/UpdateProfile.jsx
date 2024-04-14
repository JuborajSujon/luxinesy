import { useEffect } from "react";
import ProfileUpdateDetails from "../components/ProfileUpdateDetails/ProfileUpdateDetails";

const UpdateProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section
        className={`relative w-full py-20 md:py-28 lg:py-36 bg-[url('https://i.ibb.co/t341xj7/slider3.jpg')] bg-no-repeat bg-center bg-cover rounded-none`}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Update Profile
            </h3>
          </div>
        </div>
      </section>
      <ProfileUpdateDetails />
    </div>
  );
};

export default UpdateProfile;
