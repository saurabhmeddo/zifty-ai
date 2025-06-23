import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const AllArticles: React.FC = () => {
  // Complete list of all blog articles
  const allArticles = [
    {
      id: 1,
      title: "The Future of Customer Communication: AI-Powered Conversations in 2025 and Beyond",
      category: "AI Technology",
      categoryColor: "purple",
      date: "May 15, 2025",
      readTime: "15 min read",
      excerpt: "Explore how AI is transforming customer communication across industries, enabling more personalized, efficient, and scalable interactions than ever before.",
      image: "/blog-featured.jpg",
      slug: "future-of-ai-communication"
    },
    {
      id: 2,
      title: "Enhancing Customer Support with AI: 5 Success Stories",
      category: "Customer Support",
      categoryColor: "green",
      date: "May 10, 2025",
      readTime: "8 min read",
      excerpt: "Learn how leading companies have transformed their customer support operations with AI-powered communication.",
      image: "/blog-1.jpg",
      slug: "customer-support-ai"
    },
    {
      id: 3,
      title: "Mastering WhatsApp Business API: A Complete Guide for Enterprises",
      category: "Integration",
      categoryColor: "orange",
      date: "May 8, 2025",
      readTime: "10 min read",
      excerpt: "Everything you need to know about implementing WhatsApp Business API for enterprise communication.",
      image: "/blog-2.jpg",
      slug: "whatsapp-business-api"
    },
    {
      id: 4,
      title: "Integrating AI with Legacy Systems: Challenges and Solutions",
      category: "Integration",
      categoryColor: "orange",
      date: "May 5, 2025",
      readTime: "10 min read",
      excerpt: "Discover practical approaches to integrating modern AI communication tools with existing enterprise systems.",
      image: "/blog-ai-integration.jpg",
      slug: "integrating-ai-legacy-systems"
    },
    {
      id: 5,
      title: "Building an Omnichannel Communication Strategy That Actually Works",
      category: "Business",
      categoryColor: "blue",
      date: "May 3, 2025",
      readTime: "12 min read",
      excerpt: "Create seamless customer experiences across all communication channels with proven strategies.",
      image: "/blog-omnichannel.jpg",
      slug: "omnichannel-strategy"
    },
    {
      id: 6,
      title: "The ROI of AI Communication: Measuring Business Impact",
      category: "Business",
      categoryColor: "blue",
      date: "April 28, 2025",
      readTime: "12 min read",
      excerpt: "Learn how to measure and maximize the return on investment from implementing AI communication solutions.",
      image: "/blog-roi.jpg",
      slug: "roi-ai-communication"
    },
    {
      id: 7,
      title: "AI Chatbot Best Practices for 2025: Design Conversations That Convert",
      category: "AI Technology",
      categoryColor: "purple",
      date: "April 25, 2025",
      readTime: "14 min read",
      excerpt: "Design AI chatbots that delight users and drive business results with these proven best practices.",
      image: "/blog-3.jpg",
      slug: "ai-chatbot-best-practices"
    },
    {
      id: 8,
      title: "Customer Data Privacy in AI Communications: Building Trust Through Security",
      category: "AI Technology",
      categoryColor: "purple",
      date: "April 20, 2025",
      readTime: "11 min read",
      excerpt: "Implement robust privacy practices while leveraging AI to deliver exceptional customer experiences.",
      image: "/blog-4.jpg",
      slug: "customer-data-privacy"
    },
    {
      id: 9,
      title: "Reducing Customer Churn with Proactive AI Communication",
      category: "Customer Support",
      categoryColor: "green",
      date: "April 18, 2025",
      readTime: "10 min read",
      excerpt: "Identify at-risk customers before they leave and engage them proactively with AI-powered strategies.",
      image: "/blog-churn.jpg",
      slug: "reducing-customer-churn"
    },
    {
      id: 10,
      title: "The Psychology of AI Customer Service: Building Emotional Connections",
      category: "Customer Support",
      categoryColor: "green",
      date: "April 10, 2025",
      readTime: "12 min read",
      excerpt: "Understanding how to create AI experiences that feel genuinely caring and supportive.",
      image: "/blog-psychology.jpg",
      slug: "psychology-of-ai"
    },
    {
      id: 11,
      title: "Why First Response Time Matters: The 30-Second Rule in AI Customer Service",
      category: "Customer Support",
      categoryColor: "green",
      date: "April 5, 2025",
      readTime: "8 min read",
      excerpt: "The critical importance of instant response and how AI makes sub-30-second response times achievable.",
      image: "/blog-response-time.jpg",
      slug: "ai-first-response-time"
    },
    {
      id: 12,
      title: "True 24/7 Support Without Human Burnout: How AI Changes Everything",
      category: "Customer Support",
      categoryColor: "green",
      date: "March 28, 2025",
      readTime: "10 min read",
      excerpt: "Deliver round-the-clock excellence without the human cost through intelligent AI automation.",
      image: "/blog-availability.jpg",
      slug: "24-7-availability"
    },
    {
      id: 13,
      title: "Breaking Language Barriers: Multilingual AI Support That Feels Native",
      category: "Customer Support",
      categoryColor: "green",
      date: "March 22, 2025",
      readTime: "11 min read",
      excerpt: "Serve customers in their preferred language with AI that truly understands cultural context.",
      image: "/blog-multilingual.jpg",
      slug: "multilingual-support"
    },
    {
      id: 14,
      title: "Integrating WhatsApp with Your CRM: A Complete Technical Guide",
      category: "Integration",
      categoryColor: "orange",
      date: "March 15, 2025",
      readTime: "13 min read",
      excerpt: "Step-by-step guide to seamlessly connecting WhatsApp Business API with your CRM system.",
      image: "/blog-2.jpg",
      slug: "integrating-whatsapp-crm"
    },
    {
      id: 15,
      title: "Understanding NLP in Customer Service: How AI Really 'Gets' Your Customers",
      category: "AI Technology",
      categoryColor: "purple",
      date: "March 8, 2025",
      readTime: "14 min read",
      excerpt: "Demystifying Natural Language Processing and its transformative role in customer communication.",
      image: "/blog-3.jpg",
      slug: "nlp-customer-service"
    },
    {
      id: 16,
      title: "Scaling Support Operations Without Scaling Costs: The AI Advantage",
      category: "Business",
      categoryColor: "blue",
      date: "March 1, 2025",
      readTime: "12 min read",
      excerpt: "How to handle 10x support volume with the same team through intelligent AI automation.",
      image: "/blog-scaling.jpg",
      slug: "scaling-support-operations"
    },
    {
      id: 17,
      title: "Creating Personalized Customer Journeys with AI: From First Touch to Loyalty",
      category: "Customer Support",
      categoryColor: "green",
      date: "February 25, 2025",
      readTime: "11 min read",
      excerpt: "Design adaptive customer experiences that evolve with each interaction using AI insights.",
      image: "/blog-journey.jpg",
      slug: "personalized-customer-journeys"
    },
    {
      id: 18,
      title: "API-First Strategy: Building Future-Proof Communication Infrastructure",
      category: "Integration",
      categoryColor: "orange",
      date: "February 20, 2025",
      readTime: "10 min read",
      excerpt: "Why API-first design is essential for scalable, flexible communication systems.",
      image: "/blog-api.jpg",
      slug: "api-first-strategy"
    },
    {
      id: 19,
      title: "Conversational AI Design: Creating Natural, Engaging Dialogues",
      category: "AI Technology",
      categoryColor: "purple",
      date: "February 15, 2025",
      readTime: "12 min read",
      excerpt: "The art and science of designing AI conversations that customers actually enjoy.",
      image: "/blog-conversation.jpg",
      slug: "conversational-ai-design"
    },
    {
      id: 20,
      title: "Webhooks and Real-Time Events: Building Responsive Communication Systems",
      category: "Integration",
      categoryColor: "orange",
      date: "February 10, 2025",
      readTime: "9 min read",
      excerpt: "Master real-time event-driven architectures for instant, responsive customer communication.",
      image: "/blog-webhooks.jpg",
      slug: "webhooks-real-time"
    },
    {
      id: 21,
      title: "AI Ethics in Customer Service: Building Trust Through Responsible AI",
      category: "AI Technology",
      categoryColor: "purple",
      date: "February 5, 2025",
      readTime: "13 min read",
      excerpt: "Implementing ethical AI practices that respect privacy and build customer trust.",
      image: "/blog-ethics.jpg",
      slug: "ai-ethics-customer-service"
    },
    {
      id: 22,
      title: "Customer Support KPIs That Actually Matter in the AI Era",
      category: "Business",
      categoryColor: "blue",
      date: "January 30, 2025",
      readTime: "11 min read",
      excerpt: "Move beyond vanity metrics to KPIs that drive real business outcomes.",
      image: "/blog-metrics.jpg",
      slug: "customer-support-kpis"
    },
    {
      id: 23,
      title: "Cloud Migration for AI Communication: A Step-by-Step Strategy",
      category: "Integration",
      categoryColor: "orange",
      date: "January 25, 2025",
      readTime: "10 min read",
      excerpt: "Successfully move your communication infrastructure to the cloud for AI scalability.",
      image: "/blog-cloud.jpg",
      slug: "cloud-migration-strategy"
    },
    {
      id: 24,
      title: "The Future of Voice AI: Beyond Simple Commands to Natural Conversations",
      category: "AI Technology",
      categoryColor: "purple",
      date: "January 20, 2025",
      readTime: "11 min read",
      excerpt: "Exploring the evolution of voice AI from basic commands to emotionally intelligent conversations.",
      image: "/blog-voice.jpg",
      slug: "voice-ai-future"
    },
    {
      id: 25,
      title: "Building a Data-Driven Customer Experience Strategy",
      category: "Business",
      categoryColor: "blue",
      date: "January 15, 2025",
      readTime: "10 min read",
      excerpt: "Leverage customer data insights to create experiences that drive loyalty and growth.",
      image: "/blog-data.jpg",
      slug: "data-driven-customer-experience"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const articlesPerPage = 9;

  // Filter articles by category
  const filteredArticles = selectedCategory 
    ? allArticles.filter(article => article.category === selectedCategory)
    : allArticles;

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Get unique categories
  const categories = Array.from(new Set(allArticles.map(article => article.category)));

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-600';
      case 'orange':
        return 'bg-orange-100 text-orange-600';
      case 'red':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              All Articles
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Explore our complete collection of insights, guides, and case studies on AI communication.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-8 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-gray-700 font-medium mr-4">Filter by category:</span>
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({allArticles.length})
            </button>
            {categories.map(category => {
              const count = allArticles.filter(a => a.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          {/* Results count */}
          <div className="mb-8 text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
            {selectedCategory && ` in ${selectedCategory}`}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/blog/${article.slug}`} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block"
              >
                <div className="h-48 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`${getColorClasses(article.categoryColor)} text-xs font-semibold px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                    <div className="flex items-center text-blue-600">
                      <span>Read more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button 
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg ${
                          page === currentPage
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 || 
                    page === currentPage + 2
                  ) {
                    return <span key={page} className="px-3 py-2 text-gray-500">...</span>;
                  }
                  return null;
                })}
                
                <button 
                  className="px-3 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights and best practices in AI communication delivered to your inbox.
            </p>
            <a href="https://wa.me/919999637444?text=Hi%2C%20I%27d%20like%20to%20subscribe%20to%20the%20Zifty%20newsletter." target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllArticles;