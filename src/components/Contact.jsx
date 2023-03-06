import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    {/* <div className="flex">
    <div className="flex-3 mr-10 p-5 bg-slate-200 rounded">
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div class="text-gray-700 mt-8">
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div>
            <br/>
            <div className="contact-icons flex justify-center space-x-4">
                <p>
                    <a href="mailto:example@example.com" className="text-6xl text-gray-500 hover:text-gray-800">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <br/><strong>Email us:</strong><br/>Email us for general queries, including marketing and partnership opportunities.
                </p>
                <a href="tel:1234567890" className="text-6xl text-gray-500 hover:text-gray-800">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a href="/support" className="text-6xl text-gray-500 hover:text-gray-800">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                </a>
            </div>
    </div> */}
    
    <div class="bg-slate-200 max-w-screen-md mx-auto p-5 rounded">
      <div class="text-center mb-16">
        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
          Contact
        </p>
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Let’s chat and <span class="text-indigo-600"> get a quote!</span>
        </h3>
      </div>

      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-white-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Email Address
            </label>
            <input
              class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="********@*****.**"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Your Message
            </label>
            <textarea
              rows="10"
              class="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
          <div class="flex justify-between w-full px-3">
            <button className="visibility: collapse"></button>
            <button
              className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
    {/* </div> */}
    <br/>
    <br/>
    <br/>
    </>
  );
};

export default Contact;
