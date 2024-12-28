import React, { memo } from 'react'
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
// import { useTheme } from "next-themes" // Import theme hook

const PrivacyPolicy = memo(() => {
//   const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-[#1d4ed8] dark:bg-[#1e3a8a] py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center leading-tight">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-center mt-4 text-sm sm:text-base">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <Card className="p-4 sm:p-8 md:p-12 max-w-4xl mx-auto dark:bg-gray-800">
            <ScrollArea className="h-full pr-4">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d4ed8] dark:text-blue-400 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  At AlphaHelix Services, we are committed to protecting and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website, use our services, or engage with us in any way. By using our 
                  services, you agree to the practices described in this policy.
                </p>
              </div>

              <Separator className="my-8 dark:bg-gray-700" />

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d4ed8] dark:text-blue-400 mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-gray-200">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li className="leading-relaxed">Customer Care Executive Services: Contact details, customer inquiries, and service records.</li>
                  <li className="leading-relaxed">Telesales: Names, phone numbers, and purchase preferences.</li>
                  <li className="leading-relaxed">Healthcare: Medical history, treatment details, and personal health information.</li>
                  <li className="leading-relaxed">Digital Marketing & Social Media Marketing: Contact details, marketing preferences, and interaction data.</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3 dark:text-gray-200">
                  2.2 Usage Data
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  We may collect information about how you use our website and services, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages visited</li>
                  <li>Time and date of visits</li>
                </ul>
              </div>

              <Separator className="my-8 dark:bg-gray-700" />

              {/* Add other sections following the same pattern... */}

              {/* Contact Section */}
              <div className="mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1d4ed8] dark:text-blue-400 mb-4">
                   Contact Us
                </h2>
                <Card className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    For more information, please refer to our full Privacy Policy available at{" "}
                    <a 
                      href="https://www.alphahelix.com/privacy" 
                      className="text-[#1d4ed8] dark:text-blue-400 hover:underline"
                    >
                      www.alphahelix.com/privacy
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    If you have any questions or concerns about this Privacy Policy or our data practices, 
                    please contact us at:{" "}
                    <a 
                      href="mailto:privacy@alphahelix.com" 
                      className="text-[#1d4ed8] dark:text-blue-400 hover:underline"
                    >
                      privacy@alphahelix.com
                    </a>
                  </p>
                </Card>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </section>
    </div>
  )
})

export default PrivacyPolicy
