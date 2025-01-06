import React, { memo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageSquare, Loader2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = memo(() => {
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e)=>{
    const{name,value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }


  const [loading,setLoading] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!data.firstName || !data.lastName || !data.email|| !data.phone || !data.message){
      toast.error("Please fill all fields !");
      return
    }
    try {
      console.log(data)
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_SERVER,{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body:JSON.stringify({
          name:data.firstName + " " + data.lastName,
          email:data.email,
          phone:data.phone,
          message : data.message
        })
      })
      const responseData =await response.json();
      setLoading(false);
      if(responseData?.success){
        toast.success(responseData?.message);
      }else{
        toast.error(responseData?.message);
      }
      console.log(responseData);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong !");
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh]  bg-primary">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our expert team</p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-6 h-6 text-primary" />,
                title: "Phone",
                content: "+91 (620)-209-8688",
                subtitle: "Mon-Fri from 8am to 6pm",
              },
              {
                icon: <Mail className="w-6 h-6 text-primary" />,
                title: "Email",
                content: "info@alphahelixservices.com",
                subtitle: "We'll respond within 24 hours",
              },
              {
                icon: <MapPin className="w-6 h-6 text-primary" />,
                title: "Office",
                content: "Gmit Park, Delhi",
                subtitle: "India, 201305",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 cursor-pointer hover:scale-105 transition-all text-center hover:shadow-lg  shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-800 mb-2">{item.content}</p>
                <p className="text-gray-600 text-sm">{item.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                  <Input value={data.firstName} name="firstName" onChange={(e)=>handleOnChange(e)} placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input value={data.lastName} name="lastName" onChange={(e)=>handleOnChange(e)} placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input value={data.email} name="email" type="email" onChange={(e)=>handleOnChange(e)} placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input value={data.phone} name="phone" type="tel" onChange={(e)=>handleOnChange(e)} placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    rows={6}
                    name="message"
                    required
                    value={data.message}
                    onChange={(e)=>handleOnChange(e)}
                  />
                </div>
                <Button type="submit" onClick={(e)=>handleSubmit(e)} className="w-full text-white">
                  {loading ? <Loader2Icon className="animate-spin" /> : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-auto">
              <Card className="h-full">
                {/* Replace with your preferred map implementation */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83918153734!2d77.06889767095073!3d28.52721823629762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d5b1f046bc9%3A0x258ce94ef19d7aa3!2sDelhi%20GMIT%20Park!5e0!3m2!1sen!2sin!4v1678555504834!5m2!1sen!2sin"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </Card> 
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your business hours?",
                answer:
                  "We are open Monday through Friday, 8:00 AM to 6:00 PM EST.",
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer:
                  "We aim to respond to all inquiries within 24 business hours.",
              },
              {
                question: "Do you offer virtual consultations?",
                answer:
                  "Yes, we offer both virtual and in-person consultations.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries including technology, finance, healthcare, and more.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help your business grow
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact">
            <Button
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Schedule a Call
            </Button>
            </a>
            <Link to={"/services"}>
            <Button
              variant="outline"
              className="border-white text-primary bg-white hover:bg-white/10 hover:text-white"
            >
              View Services
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Contact;
