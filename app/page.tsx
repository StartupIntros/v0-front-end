import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Bot, Globe, Mail, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4" variant="secondary">
            The Future of Startup Intelligence
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            From Ideation to Funding
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The comprehensive platform where founders and investors connect through data-driven insights, AI-powered
            guidance, and real-time market intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/search">
              <Button size="lg" variant="outline">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and insights to guide your startup journey from ideation to successful funding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>
                  Advanced analytics and visual insights into market trends, funding patterns, and startup performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Bot className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>AI-Powered Guidance</CardTitle>
                <CardDescription>
                  Smart chatbot that guides founders through every stage from ideation to funding readiness
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Market Intelligence</CardTitle>
                <CardDescription>
                  Real-time news alerts, market analysis, and competitive intelligence to stay ahead
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-10 h-10 text-orange-600 mb-2" />
                <CardTitle>Investor Matching</CardTitle>
                <CardDescription>
                  Connect with the right investors based on your industry, stage, and funding requirements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Mail className="w-10 h-10 text-red-600 mb-2" />
                <CardTitle>Pitch Deck Feedback</CardTitle>
                <CardDescription>
                  Get expert feedback and coaching on your pitch deck to maximize funding success
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="w-10 h-10 text-yellow-600 mb-2" />
                <CardTitle>Fundraising Tracking</CardTitle>
                <CardDescription>
                  Monitor and track fundraising episodes, valuations, and market movements in real-time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Startups Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2B+</div>
              <div className="text-gray-600">Funding Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-gray-600 mb-8">
            Get the latest startup news, funding rounds, and market insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 px-8">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">Join 25,000+ founders and investors. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Startup Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of founders and investors who trust Startup Intros</p>
          <Link href="/dashboard">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Startup Intros</span>
              </div>
              <p className="text-gray-400">
                Empowering founders and investors with data-driven insights and AI-powered guidance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link href="/startups">Startups</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/investors">Investors</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/guides">Guides</Link>
                </li>
                <li>
                  <Link href="/api">API</Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Startup Intros. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
