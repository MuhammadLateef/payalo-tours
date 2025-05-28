"use client"
import { useState } from "react";
import { X, Calendar, Phone, User, MapPin, CreditCard, Check, Send } from "lucide-react";

export function BookingForm({ isOpen, onClose, packageDetails }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    numberOfPersons: "",
    preferredDate: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRequirements: "",
    medicalConditions: "",
    specialRequests: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // WhatsApp number - you can change this to your business number
  const WHATSAPP_NUMBER = "923554713444";

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.country.trim()) newErrors.country = "Country is required"
    if (!formData.numberOfPersons) newErrors.numberOfPersons = "Number of persons is required"
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required"
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Emergency contact is required"
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency phone is required"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const generateWhatsAppMessage = () => {
    const totalPrice = packageDetails.price * Number.parseInt(formData.numberOfPersons);
    const bookingRef = `#${Date.now().toString().slice(-6)}`;
    
    let message = `🏔️ *TOUR BOOKING REQUEST* 🏔️\n\n`;
    message += `*Package Details:*\n`;
    message += `📦 Package: ${packageDetails.title}\n`;
    message += `⏱️ Duration: ${packageDetails.days} days / ${packageDetails.nights} nights\n`;
    message += `💰 Price per person: ${packageDetails.price}\n`;
    message += `👥 Number of persons: ${formData.numberOfPersons}\n`;
    message += `💵 Total Price: *${totalPrice}*\n`;
    message += `📅 Preferred Date: ${formData.preferredDate}\n`;
    message += `🆔 Booking Reference: ${bookingRef}\n\n`;
    
    message += `*Personal Information:*\n`;
    message += `👤 Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `📧 Email: ${formData.email}\n`;
    message += `📱 Phone: ${formData.phone}\n`;
    message += `🌍 Country: ${formData.country}\n\n`;
    
    message += `*Emergency Contact:*\n`;
    message += `👤 Name: ${formData.emergencyContact}\n`;
    message += `📱 Phone: ${formData.emergencyPhone}\n\n`;
    
    if (formData.dietaryRequirements.trim()) {
      message += `*Dietary Requirements:*\n${formData.dietaryRequirements}\n\n`;
    }
    
    if (formData.medicalConditions.trim()) {
      message += `*Medical Conditions:*\n${formData.medicalConditions}\n\n`;
    }
    
    if (formData.specialRequests.trim()) {
      message += `*Special Requests:*\n${formData.specialRequests}\n\n`;
    }
    
    message += `📋 *Please confirm availability and provide further booking details.*\n\n`;
    message += `Thank you! 🙏`;
    
    console.log("Generated message:", message); // Debug log
    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    console.log("Form submitted!", formData); // Debug log

    if (!validateForm()) {
      console.log("Validation failed:", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage();
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
      
      console.log("WhatsApp URL:", whatsappURL); // Debug log
      
      // Show success message first
      setShowSuccess(true);
      
      // Open WhatsApp immediately and also after a short delay for reliability
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');
      
      setTimeout(() => {
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');
      }, 500);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          numberOfPersons: "",
          preferredDate: "",
          emergencyContact: "",
          emergencyPhone: "",
          dietaryRequirements: "",
          medicalConditions: "",
          specialRequests: "",
          agreeToTerms: false,
        });
        setShowSuccess(false);
        onClose();
      }, 4000);

    } catch (error) {
      console.error("Error processing booking:", error);
      alert("There was an error processing your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const totalPrice = formData.numberOfPersons ? packageDetails.price * Number.parseInt(formData.numberOfPersons) : 0;

  if (!isOpen) return null;

  if (showSuccess) {
    const whatsappMessage = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="mb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Request Ready!</h3>
            <p className="text-gray-600 mb-4">
              Your booking details have been prepared successfully.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-green-800">
                <strong>Next Step:</strong>
                <br />
                Click the button below to send your booking request via WhatsApp.
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
              >
                <Send className="inline-block w-4 h-4 mr-2" />
                Send via WhatsApp
              </a>
              
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="block w-full text-gray-500 hover:text-gray-700 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-white rounded-lg shadow-xl">
          <div className="relative p-6 border-b">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-2xl font-bold">Book Your Adventure</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                {packageDetails.title}
              </span>
              <span>•</span>
              <span>
                {packageDetails.days} days / {packageDetails.nights} nights
              </span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <User className="h-5 w-5" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.country && <p className="text-sm text-red-500 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <Calendar className="h-5 w-5" />
                  Trip Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Persons <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.numberOfPersons}
                      onChange={(e) => handleInputChange("numberOfPersons", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.numberOfPersons ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select number of persons</option>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? "Person" : "Persons"}
                        </option>
                      ))}
                    </select>
                    {errors.numberOfPersons && <p className="text-sm text-red-500 mt-1">{errors.numberOfPersons}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.preferredDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.preferredDate && <p className="text-sm text-red-500 mt-1">{errors.preferredDate}</p>}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.emergencyContact ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.emergencyContact && <p className="text-sm text-red-500 mt-1">{errors.emergencyContact}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.emergencyPhone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.emergencyPhone && <p className="text-sm text-red-500 mt-1">{errors.emergencyPhone}</p>}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <MapPin className="h-5 w-5" />
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements</label>
                  <textarea
                    value={formData.dietaryRequirements}
                    onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                    placeholder="Please specify any dietary restrictions or allergies"
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
                  <textarea
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="Please specify any medical conditions we should be aware of"
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="Any special requests or additional information"
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Price Summary */}
              {totalPrice > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-gray-800">
                    <CreditCard className="h-5 w-5" />
                    Price Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Package Price (per person):</span>
                      <span>${packageDetails.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of Persons:</span>
                      <span>{formData.numberOfPersons}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total Price:</span>
                      <span className="text-green-600">${totalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      * Final price may vary based on specific requirements and group discounts
                    </p>
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Book via WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, your booking details will be sent via WhatsApp to our team for confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}