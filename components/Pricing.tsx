import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$9",
    frequency: "/month",
    features: [
      "5 GB Storage",
      "Single Device Sync",
      "Basic File Sharing",
      "Email Support",
    ],
    unavailable: ["Advanced Analytics", "Custom Branding", "Priority Support"],
    badge: null,
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    frequency: "/month",
    features: [
      "100 GB Storage",
      "Unlimited Devices",
      "Advanced Analytics",
      "Team Collaboration",
      "Priority Support",
    ],
    unavailable: ["Custom Branding"],
    badge: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "Contact us",
    features: [
      "Unlimited Storage",
      "Custom Branding",
      "Dedicated Account Manager",
      "Advanced Security",
      "SLAs & Compliance Reports",
    ],
    unavailable: [],
    badge: null,
    popular: false,
  },
];

export default function PricingSection() {
  return (
    // Section background using theme variable, relative for positioning children
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">
      {/* Background pattern - Ensure z-index is correct */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-0 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            // A more organic, upward-flowing shape
            clipPath:
              "polygon(0% 100%, 15% 90%, 30% 95%, 45% 85%, 60% 90%, 75% 80%, 90% 85%, 100% 70%, 100% 100%, 0% 100%)",
            // Radial gradient for a soft, spreading light effect
            background: 'radial-gradient(circle at center bottom, var(--chart-2), var(--chart-4))',
            opacity: '0.2', // Slightly less opaque than the primary one, for subtlety
            width: '100%', // Ensure it covers the area
            height: '600px', // Explicit height
          }}
          className="mx-auto aspect-1155/678 w-288.75"
        />
      </div>

      {/* Another background pattern for more visual interest (optional) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/4 left-0 -z-0 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: 'linear-gradient(to top left, var(--chart-1), var(--accent))',
            opacity: '0.15',
            width: '100%',
            height: '700px',
          }}
          className="mx-auto aspect-1155/678 w-288.75"
        />
      </div>

      {/* Content wrapper to ensure it's above background elements */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4 font-sans">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12 font-sans">
          Choose a plan that works for you and your team. No hidden fees, cancel anytime.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-lg)]
                ${plan.popular ? "border-2" : ""}`}
              style={{
                backgroundColor: 'var(--card)', // Use card background
                color: 'var(--card-foreground)', // Use card foreground
                borderColor: plan.popular ? 'var(--primary)' : 'var(--border)' // Popular plan border
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4"> {/* Increased margin bottom */}
                  <CardTitle className="text-2xl font-semibold font-sans" style={{ color: 'var(--foreground)' }}>
                    {plan.name}
                  </CardTitle>
                  {plan.badge && (
                    <Badge
                      variant="default"
                      className="px-3 py-1 text-sm font-semibold rounded-full"
                      style={{
                        backgroundColor: 'var(--primary)', // Popular badge primary background
                        color: 'var(--primary-foreground)', // Popular badge primary foreground
                      }}
                    >
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <div className="mt-4 text-left">
                  <span className="text-4xl font-extrabold font-sans" style={{ color: 'var(--foreground)' }}>
                    {plan.price}
                  </span>
                  <span className="text-base text-[var(--muted-foreground)] ml-1 font-sans">
                    {plan.frequency}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="mt-6 space-y-4"> {/* Increased margin top */}
                <ul className="space-y-3 text-left"> {/* Increased space-y for list items */}
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3 text-base font-sans" style={{ color: 'var(--foreground)' }}> {/* Increased space-x */}
                      <Check className="w-5 h-5" style={{ color: 'var(--primary)' }} /> {/* Check icon primary color */}
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.unavailable.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-base line-through font-sans"
                      style={{ color: 'var(--muted-foreground)' }} // Muted foreground for unavailable
                    >
                      <X className="w-5 h-5" style={{ color: 'var(--destructive)' }} /> {/* X icon destructive color */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard" className="block pt-6"> {/* Added padding top for button */}
                  <Button
                    className="w-full text-base py-3 rounded-[var(--radius)] font-semibold transition-all duration-200" // Adjusted padding and radius
                    variant={plan.popular ? "default" : "outline"}
                    style={{
                      backgroundColor: plan.popular ? 'var(--primary)' : 'transparent',
                      color: plan.popular ? 'var(--primary-foreground)' : 'var(--foreground)',
                      borderColor: 'var(--border)', // Explicit border color for outline
                      borderWidth: plan.popular ? '0px' : '1px' // Remove border for default, keep for outline
                    }}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}