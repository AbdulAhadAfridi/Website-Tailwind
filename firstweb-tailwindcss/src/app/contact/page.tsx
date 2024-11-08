export default function Contact() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About CHEAMIND</h3>
          <p className="text-lg mb-4">
            CHEAMIND is dedicated to enhancing indoor environments with beautiful plants. We provide 
            a variety of indoor plant options to suit any space, ensuring the well-being of our customers.
          </p>
        </div>
    
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="http://localhost:3000" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/about" className="hover:text-blue-400">About</a>
            </li>
            <li>
              <a href="http://localhost:3000/contact" className="hover:text-blue-400">Contact Us</a>
            </li>
          </ul>
        </div>
    
        {/* Column 3: Contact Form */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg mb-4">We would love to hear from you! Please fill out the form below:</p>
          
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
              />
            </div>
            
            <div>x``
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                // rows="4"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Your Message"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    
      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-600 pt-4">
        <p className="text-sm">© 2024 CHEAMIND. All rights reserved.</p>
      </div>
    </footer>
  );
}
