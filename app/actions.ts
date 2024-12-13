'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
})

export async function submitEnquiry(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." }
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data and return a success message
  console.log("Enquiry received:", validatedFields.data)

  return { success: "Your enquiry has been submitted successfully. We'll get back to you soon." }
}

