"use client"
import { useState } from "react"

import { X, Calendar, Phone, User, MapPin, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState({})

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Calculate total price
      const totalPrice = packageDetails.price * Number.parseInt(formData.numberOfPersons)

      // Prepare email data
      const emailData = {
        to: formData.email,
        subject: `Booking Confirmation - ${packageDetails.title}`,
        bookingDetails: {
          ...formData,
          packageTitle: packageDetails.title,
          packagePrice: packageDetails.price,
          totalPrice,
          packageDays: packageDetails.days,
          packageNights: packageDetails.nights,
          submissionDate: new Date().toISOString(),
        },
      }

      // Send email (this would typically be an API call)
      const response = await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setShowSuccess(true)
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
          })
          setShowSuccess(false)
          onClose()
        }, 3000)
      } else {
        throw new Error("Failed to send booking confirmation")
      }
    } catch (error) {
      console.error("Error submitting booking:", error)
      alert("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const totalPrice = formData.numberOfPersons ? packageDetails.price * Number.parseInt(formData.numberOfPersons) : 0

  if (!isOpen) return null

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 p-4">
        <Card className="w-full max-w-md animate-in zoom-in-95 duration-500">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Confirmed!</h3>
              <p className="text-muted-foreground mb-4">
                Thank you for your booking request. We've sent a confirmation email to{" "}
                <span className="font-semibold">{formData.email}</span>
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-green-800">
                  <strong>What's next?</strong>
                  <br />
                  Our travel experts will contact you within 24 hours to finalize your booking and arrange payment.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Booking Reference: <span className="font-mono font-semibold">#{Date.now().toString().slice(-6)}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <Card className="animate-in slide-in-from-bottom-4 duration-500">
          <CardHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-2 top-2 h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl">Book Your Adventure</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary">{packageDetails.title}</Badge>
              <span>•</span>
              <span>
                {packageDetails.days} days / {packageDetails.nights} nights
              </span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="country">
                    Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className={errors.country ? "border-red-500" : ""}
                  />
                  {errors.country && <p className="text-sm text-red-500 mt-1">{errors.country}</p>}
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Trip Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="numberOfPersons">
                      Number of Persons <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.numberOfPersons}
                      onValueChange={(value) => handleInputChange("numberOfPersons", value)}
                    >
                      <SelectTrigger className={errors.numberOfPersons ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select number of persons" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Person" : "Persons"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.numberOfPersons && <p className="text-sm text-red-500 mt-1">{errors.numberOfPersons}</p>}
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">
                      Preferred Start Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className={errors.preferredDate ? "border-red-500" : ""}
                    />
                    {errors.preferredDate && <p className="text-sm text-red-500 mt-1">{errors.preferredDate}</p>}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">
                      Emergency Contact Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      className={errors.emergencyContact ? "border-red-500" : ""}
                    />
                    {errors.emergencyContact && <p className="text-sm text-red-500 mt-1">{errors.emergencyContact}</p>}
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">
                      Emergency Contact Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      className={errors.emergencyPhone ? "border-red-500" : ""}
                    />
                    {errors.emergencyPhone && <p className="text-sm text-red-500 mt-1">{errors.emergencyPhone}</p>}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                    placeholder="Please specify any dietary restrictions or allergies"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="Please specify any medical conditions we should be aware of"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="Any special requests or additional information"
                    rows={2}
                  />
                </div>
              </div>

              {/* Price Summary */}
              {totalPrice > 0 && (
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
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
                    <p className="text-xs text-muted-foreground mt-2">
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
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-primary underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary underline">
                    Privacy Policy
                  </a>{" "}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}

              {/* Submit Button */}
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you're requesting a booking. Our team will contact you to confirm availability
                and arrange payment.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
