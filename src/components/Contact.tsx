import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-slate-100 py-20 px-4">
        <div className="max-h-screen bg-white py-10 px-4 mt-10 md:mx-70 rounded-xl shadow-xl">
          <form className="max-w-sm mx-auto">
            <h1 className="text-3xl font-bold mb-5">Contact Me</h1>
            <p className="text-sm md:text-base mb-10">
              Please fill in the information below. I will contact you back.
            </p>

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="tel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="tel"
                placeholder="Enter you phone number"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@gmail.com"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gray-700 text-white px-10 md:px-10 py-3 md:py-3 rounded-md mt-5 inline-block hover:bg-cyan-500 transition-all duration-300 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
