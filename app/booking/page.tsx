import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const packageOptions = [
  { id: "dorm-starter", name: "Dorm Starter", totes: 5, price: 25, category: "student" },
  { id: "dorm-standard", name: "Dorm Standard", totes: 10, price: 45, category: "student" },
  { id: "dorm-plus", name: "Dorm Plus", totes: 15, price: 65, category: "student" },
  { id: "starter", name: "Starter", totes: 20, price: 89, category: "home" },
  { id: "2-bedroom", name: "2 Bedroom", totes: 40, price: 129, category: "home" },
  { id: "3-bedroom", name: "3 Bedroom", totes: 60, price: 179, category: "home" },
  { id: "4-bedroom-home", name: "4 Bedroom Home", totes: 100, price: 249, category: "home" },
  { id: "large-home", name: "Large Home", totes: 150, price: 329, category: "home" },
  { id: "estate", name: "Estate / Full House", totes: 200, price: 399, category: "home" },
  { id: "a-la-carte", name: "A La Carte", totes: 0, price: 6, category: "flex" },
];

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState("2-bedroom");
  const [quantity, setQuantity] = useState("10");
  const [isStudent, setIsStudent] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);

  const chosenPackage = useMemo(() => {
    return packageOptions.find((pkg) => pkg.id === selectedPackage) || packageOptions[4];
  }, [selectedPackage]);

  const pricing = useMemo(() => {
    const basePrice =
      chosenPackage.id === "a-la-carte"
        ? Number(quantity || 0) * chosenPackage.price
        : chosenPackage.price;

    const studentDiscount = isStudent ? basePrice * 0.25 : 0;
    const referralDiscount = isStudent && hasReferral ? basePrice * 0.25 : 0;
    const total = Math.max(0, basePrice - studentDiscount - referralDiscount);

    return {
      basePrice,
      studentDiscount,
      referralDiscount,
      total,
    };
  }, [chosenPackage, quantity, isStudent, hasReferral]);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur sticky top-0 z-20 border-b">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="ReBoxed logo" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-blue-600">Re</span>Boxed
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Pricing</Button>
          <Button>Student Moves</Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-20 text-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Book Your Move
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Reserve your totes in just a few minutes.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Pick your package, choose your dates, and lock in a cleaner, easier move with ReBoxed.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Booking Details</h2>
                <p className="text-gray-600">
                  Fill out the details below and we’ll have everything ready for your delivery and pickup window.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="George" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Gross" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Package</Label>
                  <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                    <SelectTrigger className="rounded-2xl">
                      <SelectValue placeholder="Choose a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packageOptions.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id}>
                          {pkg.name}{" "}
                          {pkg.id !== "a-la-carte"
                            ? `• ${pkg.totes} totes • $${pkg.price}`
                            : `• $${pkg.price}/tote`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">A La Carte Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    placeholder="10"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    disabled={selectedPackage !== "a-la-carte"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="delivery-date">Delivery Date</Label>
                  <Input id="delivery-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input id="pickup-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" placeholder="123 Main St" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Lynchburg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="VA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="24501" />
                </div>
              </div>

              <div className="space-y-4 rounded-3xl bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="student"
                    checked={isStudent}
                    onCheckedChange={(checked) => setIsStudent(Boolean(checked))}
                  />
                  <div>
                    <Label htmlFor="student" className="text-base font-semibold cursor-pointer">
                      I’m booking a student move
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Valid student ID qualifies for 25% off. Great for dorms, apartments, and campus housing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="referral"
                    checked={hasReferral}
                    onCheckedChange={(checked) => setHasReferral(Boolean(checked))}
                    disabled={!isStudent}
                  />
                  <div>
                    <Label htmlFor="referral" className="text-base font-semibold cursor-pointer">
                      I have a same-window student referral
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      If a friend is booking for the same campus move window, you both can unlock another 25% off.
                    </p>
                  </div>
                </div>

                {isStudent && hasReferral && (
                  <div className="space-y-2">
                    <Label htmlFor="referral-code">Referral Code or Friend’s Name</Label>
                    <Input id="referral-code" placeholder="REBOX-CAMPUS25 or friend's name" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Gate code, dorm details, preferred delivery window, or anything else we should know."
                  className="min-h-28"
                />
              </div>

              <Button className="w-full text-lg py-6 rounded-2xl">
                Continue to Confirmation
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6 sticky top-24">
            <Card className="rounded-3xl shadow-sm border-2 border-blue-500">
              <CardContent className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Booking Summary
                </p>
                <h2 className="text-2xl font-semibold mb-6">Your Estimate</h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">Package</span>
                    <span className="font-medium text-right">{chosenPackage.name}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">Totes</span>
                    <span className="font-medium text-right">
                      {chosenPackage.id === "a-la-carte" ? quantity || 0 : chosenPackage.totes}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-medium">${pricing.basePrice.toFixed(2)}</span>
                  </div>

                  {pricing.studentDiscount > 0 && (
                    <div className="flex justify-between gap-4 text-green-700">
                      <span>Student Discount</span>
                      <span>-${pricing.studentDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  {pricing.referralDiscount > 0 && (
                    <div className="flex justify-between gap-4 text-green-700">
                      <span>Referral Boost</span>
                      <span>-${pricing.referralDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="border-t pt-4 flex justify-between gap-4 text-lg font-semibold">
                    <span>Estimated Total</span>
                    <span>${pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-xl font-semibold">What happens next?</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><span className="font-semibold text-gray-900">1.</span> Submit your request.</p>
                  <p><span className="font-semibold text-gray-900">2.</span> We confirm your delivery and pickup window.</p>
                  <p><span className="font-semibold text-gray-900">3.</span> You get a confirmation email with all the details.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm bg-green-50 border-green-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">Student move note</h3>
                <p className="text-sm text-gray-700">
                  Student discounts apply with a valid ID. Referral boosts apply only to students booking for the same campus move window and are subject to confirmation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
