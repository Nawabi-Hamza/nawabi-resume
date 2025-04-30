'use client';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { TbMailForward } from 'react-icons/tb';
import { toast } from 'react-toastify';

function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  const [state, handleSubmit] = useForm('xblodzrw');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      toast.error('All fields are required!');
      return;
    }

    if (!isValidEmail(userInput.email)) {
      toast.error('Please provide a valid email!');
      return;
    }

    const form = e.target;
    await handleSubmit(e);

    if (state.succeeded) {
      toast.success('Message sent successfully!');
      setUserInput({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
        </p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              name="name"
              maxLength="100"
              required
              onChange={handleChange}
              value={userInput.name}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              name="email"
              maxLength="100"
              required
              onChange={handleChange}
              value={userInput.email}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              name="message"
              maxLength="500"
              required
              onChange={handleChange}
              rows="4"
              value={userInput.message}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
