"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_nk9nrgx",
        "template_0g4owgi",
        formRef.current,
        "_JN_aT6Na3UuGoxd_"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="contact">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col items-center text-sm"
      >
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Contact</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Let's talk about your project
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 mb-16">
          Feel free to reach out if you'd like to brainstorm ideas, discuss a
          project, or work on something impactful together.
        </p>

        {/* Inputs */}
        <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
          <div className="w-full">
            <label className="text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="h-12 p-2 mt-2 w-full border border-gray-700 bg-gray-800 rounded outline-none focus:border-indigo-500 text-white"
            />
          </div>

          <div className="w-full">
            <label className="text-gray-300">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="h-12 p-2 mt-2 w-full border border-gray-700 bg-gray-800 rounded outline-none focus:border-indigo-500 text-white"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 w-[350px] md:w-[700px]">
          <label className="text-gray-300">Message</label>
          <textarea
            name="message"
            required
            className="w-full mt-2 p-2 h-40 border border-gray-700 bg-gray-800 rounded resize-none outline-none focus:border-indigo-500 text-white"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-5 bg-indigo-500 text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-indigo-400 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Status */}
        {status && (
          <p className="mt-4 text-sm text-gray-300">{status}</p>
        )}
      </form>
    </div>
  );
}
