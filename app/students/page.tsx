
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StudentDormPage() {
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
          <Button variant="outline">View Full Pricing</Button>
          <Button>Reserve</Button>
        </div>
      </header>

      <section className="relative overflow-hidden text-center py-24 px-6">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 mb-3 bg-white/70 inline-block px-4 py-2 rounded-full">
            Student Moves
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
            Dorm move-ins made easier.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
            ReBoxed gives students a cleaner, faster way to move into dorms,
            apartments, and campus housing without cardboard chaos.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-xl px-8 py-8 md:px-12 md:py-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold mb-2 text-white/80">
                College Student Savings
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Students Save 25% With a Valid Student ID
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl">
                Great for move-in day, move-out day, semester changes, and short
                apartment moves around campus.
              </p>
            </div>
            <div>
              <Button className="text-base md:text-lg px-6 py-3 bg-white text-blue-700 hover:bg-white/90">
                Claim Student Discount
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 mb-3">
              Student Referral Boost
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Move with a friend and save up to 50%
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Students get 25% off with a valid ID. Refer a friend booking the
              same campus move-in or move-out window, and you both get another
              25% off that same rental.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Start with 25% Off</h3>
                <p className="text-gray-600">
                  Every student booking gets 25% off with a valid student ID.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center border-2 border-green-500">
                <h3 className="text-lg font-bold mb-2">Refer a Friend</h3>
                <p className="text-gray-600">
                  When a friend books for the same campus move window, you both
                  unlock another 25% off.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Up to 50% Total</h3>
                <p className="text-gray-600">
                  Batch move-ins, easier logistics, and the biggest savings when
                  students spread the word.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-3xl bg-green-50 border border-green-100 p-6 md:p-8">
            <h3 className="text-xl font-bold mb-3 text-center">How it works</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold mb-1">1. Book your move</p>
                <p className="text-sm text-gray-600">
                  Get your 25% student discount automatically with a valid ID.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">2. Share with a friend</p>
                <p className="text-sm text-gray-600">
                  Have them book for the same campus and move window.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">3. Both save more</p>
                <p className="text-sm text-gray-600">
                  You both get the extra 25% off, up to 50% total.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              Referral discount applies to student bookings in the same campus
              move window and is not combinable with other offers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Dorm Room Pricing
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Right-sized packages for dorm rooms and campus housing, without
            paying for more totes than you need.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Dorm Starter</h3>
                <p className="text-3xl font-bold my-4">$25</p>
                <p>5 Totes • 1 Week Rental</p>
                <p className="text-sm text-gray-500 mt-3">
                  Perfect for a light dorm setup.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center border-2 border-blue-500">
                <h3 className="text-xl font-bold">Dorm Standard</h3>
                <p className="text-3xl font-bold my-4">$45</p>
                <p>10 Totes • 1 Week Rental</p>
                <p className="text-sm text-gray-500 mt-3">
                  Best fit for most dorm room moves.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Dorm Plus</h3>
                <p className="text-3xl font-bold my-4">$65</p>
                <p>15 Totes • 1 Week Rental</p>
                <p className="text-sm text-gray-500 mt-3">
                  For students bringing more gear or sharing space.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Need more than a dorm package?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-3xl font-bold my-4">$89</p>
                <p>20 Totes • 1 Week Rental</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center border-2 border-blue-500">
                <h3 className="text-xl font-bold">2 Bedroom</h3>
                <p className="text-3xl font-bold my-4">$129</p>
                <p>40 Totes • 1 Week Rental</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">3 Bedroom</h3>
                <p className="text-3xl font-bold my-4">$179</p>
                <p>60 Totes • 1 Week Rental</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="text-lg px-6 py-3">View Full Pricing</Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">No Tape Needed</h3>
              <p className="text-gray-600">
                No folding boxes, no tape guns, and no post-move cardboard
                cleanup.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Fast Move-In</h3>
              <p className="text-gray-600">
                Stackable totes make it easier to unload fast and get settled
                quickly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Built for Campus Life</h3>
              <p className="text-gray-600">
                Perfect for dorms, apartments, semester transitions, and summer
                storage moves.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready for move-in day?</h2>
        <p className="mb-6 text-gray-700">
          Reserve your totes now and make your dorm move cleaner, faster, and
          easier.
        </p>
        <Button className="text-lg px-6 py-3">Reserve Your Dorm Package</Button>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ReBoxed. All rights reserved.
      </footer>
    </div>
  );
}
