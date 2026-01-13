'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, AlertCircle } from 'lucide-react';

const serviceCategories = [
  'Direct Tax',
  'Indirect Tax (GST)',
  'Audit & Assurance',
  'Accounting & Compliance',
  'Corporate / ROC Compliance',
  'Advisory',
  'Other',
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || '',
    message: '',
    contactMode: 'email',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API endpoint or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        contactMode: 'email',
        preferredTime: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send an Enquiry</h2>

      {/* Security Warning */}
      <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="text-sm font-medium text-red-900 mb-1">Security Warning</p>
          <p className="text-xs text-red-800">
            Do not share passwords, OTPs, bank credentials, or highly sensitive documents through this form or email. Such information should only be shared through secure, authenticated channels during an active engagement.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-700" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Enquiry Received</h3>
          <p className="text-sm text-green-800">
            Thank you for reaching out. We will review your enquiry and respond as appropriate.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone <span className="text-neutral-500 text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
              Service Category
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              <option value="">Select a category</option>
              {serviceCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
              placeholder="Please describe your enquiry..."
            />
          </div>

          <div>
            <label htmlFor="contactMode" className="block text-sm font-medium text-neutral-700 mb-2">
              Preferred Contact Mode
            </label>
            <select
              id="contactMode"
              name="contactMode"
              value={formData.contactMode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-700 mb-2">
              Preferred Time <span className="text-neutral-500 text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              placeholder="e.g., Weekday mornings, after 6 PM"
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-700 text-white py-3 rounded-md hover:bg-primary-800 transition-colors font-medium flex items-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            Send Enquiry
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 h-96 animate-pulse"></div>}>
      <ContactFormContent />
    </Suspense>
  );
}
