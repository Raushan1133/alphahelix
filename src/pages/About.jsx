import React, { memo } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Hero } from '@/component/Hero'
import Counters, { CounterBox } from '@/component/Counter'

const About = memo(() => {
  return (
    <div className="min-h-scree">
      {/* Hero Section */}
      <section className="">
      <Hero />
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12   md:grid-cols-2">
            <div className='shadow-md rounded-lg p-8'>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2010, our consultancy has been at the forefront of business 
                transformation. We believe in delivering exceptional value through 
                innovative solutions and strategic thinking.
              </p>
            </div>
            <div className="rounded-lg shadow-md p-8">
              <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge solutions and strategic 
                guidance that drives sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <CounterBox label="Clients Served" targetNumber={500} duration={2000} />
            <CounterBox label="Clients Served" targetNumber={500} duration={2000} />
            <CounterBox label="Clients Served" targetNumber={500} duration={2000} />
            <Counter value={500} title="Clients Served" />
            <Counter value={150} title="Team Members" />
            <Counter value={50} title="Countries" />
            <Counter value={95} title="Success Rate" suffix="%" />
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Expertise</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Strategy Consulting",
                description: "Business strategy development and implementation"
              },
              {
                title: "Digital Transformation",
                description: "Modernizing businesses for the digital age"
              },
              {
                title: "Operations Excellence",
                description: "Optimizing business processes and operations"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg cursor-pointer transition-shadow">
                <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Leadership Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                name: "John Doe",
                position: "CEO",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Jane Smith",
                position: "COO",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Mike Johnson",
                position: "CTO",
                image: "https://via.placeholder.com/150"
              },
              {
                name: "Sarah Williams",
                position: "CFO",
                image: "https://via.placeholder.com/150"
              }
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full object-cover h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-xl">Let's discuss how we can help you achieve your goals</p>
          <Link to={"/contact"}>
          <Button className="rounded-full bg-white px-8 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Contact Us
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
})

export default About
