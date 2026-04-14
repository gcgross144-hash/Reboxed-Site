
"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [bedrooms, setBedrooms] = useState("2");
  const [packingStyle, setPackingStyle] = useState("average");

  const recommendation = useMemo(() => {
    const baseMap: Record<string, number> = {
      studio: 20,
      "1": 20,
      "2": 40,
      "3": 60,
      "4": 100,
      "5+": 150,
    };

    const adjustmentMap: Record<string, number> = {
      light: -5,
      average: 0,
      heavy: 10,
      very_heavy: 25,
    };

    const recommendedTotes = Math.max(
      5,
      (baseMap[bedrooms] || 40) + (adjustmentMap[packingStyle] || 0)
    );

    const packages = [
      { name: "Starter", totes: 20, price: 89 },
      { name: "2 Bedroom", totes: 40, price: 129 },
      { name: "3 Bedroom", totes: 60, price: 179 },
      { name: "4 Bedroom Home", totes: 100, price: 249 },
      { name: "Large Home", totes: 150, price: 329 },
      { name: "Estate / Full House", totes: 200, price: 399 },
    ];

    const bestPackage =
      packages.find((pkg) => pkg.totes >= recommendedTotes) ||
      packages[packages.length - 1];

    return {
      recommendedTotes,
      bestPackage,
    };
  }, [bedrooms, packingStyle]);

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
          <Button variant="outline">Student Moves</Button>
          <Button>Reserve</Button>
        </div>
      </header>

      <section className="relative overflow-hidden text-center py-24 px-6">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Simple pricing for moves of every size.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Choose the package that fits your move best, or rent individual totes
            when you only need a few.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Packages based on home size — the more you move, the more you save per
          tote.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="text-3xl font-bold my-4">$89</p>
              <p>20 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">Studio / 1 Bedroom</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center border-2 border-blue-500">
              <h3 className="text-xl font-bold">2 Bedroom</h3>
              <p className="text-3xl font-bold my-4">$129</p>
              <p>40 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">Apartments & small homes</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">3 Bedroom</h3>
              <p className="text-3xl font-bold my-4">$179</p>
              <p>60 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">Most family moves</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">4 Bedroom Home</h3>
              <p className="text-3xl font-bold my-4">$249</p>
              <p>100 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">Larger households</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">Large Home</h3>
              <p className="text-3xl font-bold my-4">$329</p>
              <p>150 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">High volume moves</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">Estate / Full House</h3>
              <p className="text-3xl font-bold my-4">$399</p>
              <p>200 Totes • 1 Week</p>
              <p className="text-sm text-gray-500 mt-2">Maximum capacity</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-md mx-auto mt-10">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">A La Carte</h3>
              <p className="text-3xl font-bold my-4">$6 / tote</p>
              <p>Flexible quantity</p>
              <p className="text-sm text-gray-500 mt-2">
                Best for small needs or add-ons
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Tote Calculator
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Not sure how many totes you need?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use this quick calculator to estimate the right package based on
              home size and how heavily packed your move is.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-14">
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Home Size
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-base"
                  >
                    <option value="studio">Studio</option>
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedroom</option>
                    <option value="3">3 Bedroom</option>
                    <option value="4">4 Bedroom</option>
                    <option value="5+">5+ Bedroom / Large Home</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Packing Level
                  </label>
                  <select
                    value={packingStyle}
                    onChange={(e) => setPackingStyle(e.target.value)}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-base"
                  >
                    <option value="light">Light</option>
                    <option value="average">Average</option>
                    <option value="heavy">Heavy</option>
                    <option value="very_heavy">Very Heavy</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center flex flex-col justify-center h-full border-2 border-blue-500">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Recommendation
                </p>
                <h3 className="text-5xl font-bold mb-3">
                  {recommendation.recommendedTotes}
                </h3>
                <p className="text-lg text-gray-700 mb-4">estimated totes needed</p>
                <div className="rounded-2xl bg-blue-50 px-6 py-5">
                  <p className="text-sm text-gray-600 mb-2">Best package match</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {recommendation.bestPackage.name}
                  </p>
                  <p className="text-lg text-gray-700 mt-1">
                    {recommendation.bestPackage.totes} totes • $
                    {recommendation.bestPackage.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Bundle Value</h3>
              <p className="text-gray-600">
                The bigger the package, the better your effective per-tote value.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2">No Cardboard Mess</h3>
              <p className="text-gray-600">
                No tape, no box breakdown, and no piles of waste after your move.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Student Option Available</h3>
              <p className="text-gray-600">
                Students save 25% with a valid ID, and dorm pricing has its own
                dedicated page.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center py-20 px-6 bg-blue-50">
        <h2 className="text-3xl font-semibold mb-4">Need dorm room pricing instead?</h2>
        <p className="mb-6 text-gray-700">
          Check out our student-focused options for move-in, move-out, and
          semester transitions.
        </p>
        <Button className="text-lg px-6 py-3">See Dorm Pricing</Button>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ReBoxed. All rights reserved.
      </footer>
    </div>
  );
}
