import React, { useState, ChangeEvent, FormEvent } from 'react'

interface EmailFormData {
  name: string
  email: string
  message: string
}

interface EmailFormProps {
  darkMode: boolean
}

const EmailForm: React.FC<EmailFormProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const subject = `New message from ${formData.name}, at ${formData.email}`
    const body = formData.message

    const mailtoLink = `mailto:stephanramalho@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <div
      className={` relative  flex flex-1 mr-14 items-center  ${
        darkMode ? 'dark' : ''
      } bg-emerald-200 p-3 rounded-xl shadow-xl dark:bg-emerald-500 dark:bg-gradient-to-r from-teal-500 md:mr-0 md:w-[200px]`}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-center dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="bg-purple-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-purple-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default EmailForm
