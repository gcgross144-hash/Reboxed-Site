import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur sticky top-0 z-20 border-b">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="ReBoxed logo" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-blue-600">Re</span>Boxed
          </span>
        </div>
        <Button>Reserve</Button>
      </header>

      <section className="relative overflow-hidden text-center py-24 px-6">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block mb-4 rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm">
            Cleaner moves. Less stress. No cardboard chaos.
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Skip the Cardboard.{" "}
            <span className="text-blue-600">Rent Reusable Totes.</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            ReBoxed makes moving easier, cleaner, and more efficient with durable
            reusable moving bins delivered right to your door.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="text-lg px-6 py-3">Reserve Your Totes</Button>
            <Button variant="outline" className="text-lg px-6 py-3 bg-white/80">
              See Student Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-xl px-8 py-8 md:px-12 md:py-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold mb-2 text-white/80">
                College Student Special
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Students Save 25% On Every Rental
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl">
                Perfect for move-in, move-out, apartment changes, and semester
                transitions in a college town.
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

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Flexible packages for small moves, big moves, and everything in between.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From full bundle packages to individual tote rentals, ReBoxed has options
            that fit the way you move.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="text-lg px-6 py-3">View Full Pricing</Button>
            <Button variant="outline" className="text-lg px-6 py-3 bg-white">
              Student & Dorm Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready to Make Moving Easy?</h2>
        <p className="mb-6">Reserve your totes today and skip the hassle.</p>
        <Button className="text-lg px-6 py-3">Get Started</Button>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ReBoxed. All rights reserved.
      </footer>
    </div>
  );
}
