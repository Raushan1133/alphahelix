import React, { memo } from 'react'
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NotFound = memo(() => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          {/* Animated 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-8xl sm:text-9xl font-bold text-[#1d4ed8]/10 dark:text-white/5">
              404
            </h1>
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl font-bold text-[#1d4ed8] dark:text-blue-400">
              Page Not Found
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto"
          >
            Oops! The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              What can you do?
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 text-sm sm:text-base space-y-3 text-left">
              <li className="flex items-center gap-2">
                <Home className="w-5 h-5 text-[#1d4ed8] dark:text-blue-400" />
                Return to the homepage
              </li>
              <li className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5 text-[#1d4ed8] dark:text-blue-400" />
                Go back to the previous page
              </li>
              <li className="flex items-center gap-2">
                <Search className="w-5 h-5 text-[#1d4ed8] dark:text-blue-400" />
                Try searching for the content
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => navigate("/")}
              className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white dark:bg-blue-600 dark:hover:bg-blue-700 w-full sm:w-auto"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Support Contact */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            Need help? Contact our support team at{" "}
            <a 
              href="mailto:support@alphahelix.com" 
              className="text-[#1d4ed8] dark:text-blue-400 hover:underline"
            >
              support@alphahelix.com
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  )
})

export default NotFound
