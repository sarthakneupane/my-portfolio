import { useState, useEffect, useRef } from "react"
import { Button } from "../components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react"
import emailjs from "@emailjs/browser";



export function ContactSection() {


  const sectionRef = useRef(null)
  const contentRef = useRef(null)


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: "neupanesarthak3000@gmail.com", // YOUR EMAIL
        to_name: "Sarthak",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsSubmitted(true);

      // reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
  };



  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
      if (contentRef.current) observer.observe(contentRef.current);
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
        if (contentRef.current) observer.unobserve(contentRef.current);
      };
    }, []);

  return (
    <section id="contact" className="bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 text-gray-300 py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-2xl">
         {/* Title */}
        <div ref={sectionRef} className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative text-orange-500">
            Get in Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2"></span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Text */}
          <div className="space-y-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Let’s connect
                </h3>
                <p className="text-gray-400 max-w-md">
                  Feel free to reach out for projects, collaborations, or just a friendly hello.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-500 mt-1" size={22} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-400 text-sm">
                      Biratnagar, Nepal
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-orange-500 mt-1" size={22} />
                  <div>
                    <p className="font-semibold">Contact Number</p>
                    <p className="text-gray-400 text-sm">
                      +977 9811391785
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-orange-500 mt-1" size={22} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">
                      neupanesarthak3000@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>


          {/* Right Side - Contact Form */}
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors py-2"
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors py-2"
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-muted text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors py-2 resize-none"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors">
                Send a Message
              </Button>
            </div>
          </form>
        </div>

        {isSubmitted && (
          <p className="text-green-500 text-sm mt-4">
            ✅ Message sent successfully! I’ll get back to you soon.
          </p>
        )}


      </div>
    </section>
  )
}
