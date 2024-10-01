import React from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white lg:px-4">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-4 font-montserrat">GET IN TOUCH</h2>
        <p className="text-gray-400 font-mulish mb-6">
          Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast reef sails skysail. Shiver me timbers loot bucko belaying pin Sea Legs boom gunwalls booty jury mast fore.
        </p>
        <form className="bg-card-background p-6 shadow-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="mb-4">
              <label className="block font-mulish text-white mb-2">Name*</label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block font-mulish text-white mb-2">Email Address*</label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-mulish text-white mb-2">Message*</label>
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-button-accent hover:bg-blue-700 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
