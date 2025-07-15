import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const PsychologyOfAI: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <article className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
          </div>
          
          <div className="mb-8">
            <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">Customer Support</span>
            <span className="text-gray-500 text-sm ml-4">April 10, 2025 • 12 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Psychology of AI Customer Service: Building Emotional Connections
          </h1>
          
          <div className="flex items-center mb-8">
            <img 
              src="/author-avatar.jpg" 
              alt="Dr. Sarah Chen" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">Dr. Sarah Chen</p>
              <p className="text-gray-500 text-sm">Behavioral Psychologist & AI Experience Designer</p>
            </div>
          </div>
          
          <img 
            src="/blog-psychology.jpg" 
            alt="Psychology of AI Customer Service" 
            className="w-full h-auto rounded-xl mb-8"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Can a machine truly understand human emotions? While AI may not "feel" in the human sense, it can recognize, respond to, and even anticipate emotional needs with remarkable accuracy. The key lies in understanding the psychology behind human-AI interactions and designing experiences that feel genuinely caring and supportive.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Emotional Side of Customer Support</h2>
            <p className="text-gray-700 mb-4">
              When customers reach out for support, they're not just looking for solutions—they're seeking understanding, validation, and reassurance. Research in customer psychology reveals that emotional satisfaction often matters more than technical resolution:
            </p>
            
            <div className="bg-purple-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">The Emotional Hierarchy of Customer Needs:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>To be heard:</strong> Acknowledgment of their concern</li>
                <li><strong>To be understood:</strong> Empathy for their situation</li>
                <li><strong>To be valued:</strong> Recognition of their importance</li>
                <li><strong>To be helped:</strong> Practical solution to their problem</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">How AI Creates Emotional Resonance</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Mirroring and Matching</h3>
            <p className="text-gray-700 mb-4">
              AI can analyze communication patterns and adapt its responses to match the customer's emotional state and communication style:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Frustrated Customer:</h4>
                <p className="text-sm text-gray-700 italic">"I'm really frustrated about this."</p>
                <p className="text-sm text-gray-600 mt-2">AI Response: "I completely understand your frustration. Let me fix this right away."</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Confused Customer:</h4>
                <p className="text-sm text-gray-700 italic">"I don't understand how this works."</p>
                <p className="text-sm text-gray-600 mt-2">AI Response: "No worries! Let me break this down step by step."</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Personalization Through Memory</h3>
            <p className="text-gray-700 mb-4">
              AI's ability to remember past interactions creates a sense of continuity and care:
            </p>
            
            <div className="bg-yellow-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 italic mb-2">
                "Welcome back, Sarah! I see you were working on setting up your integration last week. How did that go? Need any help finishing up?"
              </p>
              <p className="text-sm text-gray-600">→ Shows attentiveness and genuine interest in the customer's progress</p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Proactive Emotional Support</h3>
            <p className="text-gray-700 mb-4">
              AI can detect emotional cues and respond proactively:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li>Detecting frustration in message tone and offering immediate escalation</li>
              <li>Recognizing confusion and providing additional clarification</li>
              <li>Identifying stress patterns and suggesting breaks or simpler alternatives</li>
              <li>Celebrating successes and milestones with customers</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Science of Trust in AI Interactions</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Trust Factors in AI Communication:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Consistency (35%)</h4>
                  <p className="text-sm text-gray-600">Reliable responses and follow-through on promises</p>
                </div>
                <div>
                  <h4 className="font-medium">Transparency (25%)</h4>
                  <p className="text-sm text-gray-600">Clear about capabilities and limitations</p>
                </div>
                <div>
                  <h4 className="font-medium">Competence (20%)</h4>
                  <p className="text-sm text-gray-600">Accurate solutions and knowledgeable responses</p>
                </div>
                <div>
                  <h4 className="font-medium">Empathy (20%)</h4>
                  <p className="text-sm text-gray-600">Understanding and acknowledging emotions</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Designing Emotionally Intelligent AI Responses</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">The E.M.P.A.T.H.Y. Framework</h3>
            
            <div className="space-y-4 my-6">
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">E</span>
                <div>
                  <strong>Engage:</strong> Immediate acknowledgment
                  <p className="text-sm text-gray-600">"I'm here to help with that issue."</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">M</span>
                <div>
                  <strong>Mirror:</strong> Reflect understanding
                  <p className="text-sm text-gray-600">"I understand this is causing delays in your work."</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">P</span>
                <div>
                  <strong>Personalize:</strong> Use context and history
                  <p className="text-sm text-gray-600">"Since you prefer quick solutions, let me give you the fastest fix."</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">A</span>
                <div>
                  <strong>Act:</strong> Take concrete steps
                  <p className="text-sm text-gray-600">"I'm updating your settings now."</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">T</span>
                <div>
                  <strong>Thank:</strong> Appreciate their patience
                  <p className="text-sm text-gray-600">"Thanks for your patience while I fixed this."</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">H</span>
                <div>
                  <strong>Help:</strong> Offer continued support
                  <p className="text-sm text-gray-600">"Is there anything else I can help with?"</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-purple-600 mr-3">Y</span>
                <div>
                  <strong>Yield:</strong> Know when to escalate
                  <p className="text-sm text-gray-600">"Let me connect you with a specialist for this complex issue."</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Common Emotional Triggers and AI Responses</h2>
            
            <div className="space-y-6 my-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-700">Anger/Frustration</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Do:</strong> Acknowledge immediately, apologize if appropriate, focus on solutions<br/>
                  <strong>Don't:</strong> Minimize feelings, make excuses, or respond defensively
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-700">Confusion/Overwhelm</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Do:</strong> Simplify language, break into steps, offer examples<br/>
                  <strong>Don't:</strong> Use jargon, rush through explanations, assume knowledge
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-700">Anxiety/Worry</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Do:</strong> Provide reassurance, clear timelines, regular updates<br/>
                  <strong>Don't:</strong> Dismiss concerns, be vague, leave things open-ended
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-700">Excitement/Enthusiasm</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Do:</strong> Match energy, celebrate with them, suggest next steps<br/>
                  <strong>Don't:</strong> Dampen enthusiasm, rush past their success, be monotone
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Uncanny Valley of AI Communication</h2>
            <p className="text-gray-700 mb-4">
              There's a delicate balance in AI communication. Too robotic, and customers feel unheard. Too human-like, and it becomes creepy. The sweet spot is being helpful, understanding, and efficient while maintaining appropriate boundaries:
            </p>
            
            <div className="bg-red-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-3">Avoiding the Uncanny Valley:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Be warm but professional</li>
                <li>Show understanding without claiming to "feel"</li>
                <li>Use natural language without pretending to be human</li>
                <li>Acknowledge AI identity when relevant</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Measuring Emotional Success</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-purple-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Sentiment Score</h3>
                <p className="text-3xl font-bold text-purple-600">+85%</p>
                <p className="text-sm text-gray-600">Post-interaction positivity</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Emotional Resolution</h3>
                <p className="text-3xl font-bold text-blue-600">92%</p>
                <p className="text-sm text-gray-600">Customers feel heard</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Trust Rating</h3>
                <p className="text-3xl font-bold text-green-600">4.7/5</p>
                <p className="text-sm text-gray-600">AI interaction trust</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Future: Emotionally Adaptive AI</h2>
            <p className="text-gray-700 mb-6">
              The next frontier in AI customer service is real-time emotional adaptation. Imagine AI that not only recognizes your current emotional state but anticipates emotional needs based on context, timing, and historical patterns. This isn't science fiction—it's the direction we're heading.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 my-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Create Emotionally Intelligent Customer Experiences?</h3>
              <p className="text-gray-700 mb-6">
                Let Zifty help you build AI-powered support that truly connects with your customers.
              </p>
              <a href="https://wa.me/919220504402?text=Hi%2C%20I%20read%20your%20article%20on%20the%20psychology%20of%20AI%20customer%20service%20and%20would%20like%20to%20create%20more%20emotionally%20intelligent%20support%20experiences." target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Design Emotionally Intelligent AI
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/reducing-customer-churn" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-churn.jpg" 
                  alt="Reducing Customer Churn" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded">Customer Support</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Reducing Customer Churn with Proactive AI</h3>
                <p className="text-gray-600">Identify and engage at-risk customers before they leave.</p>
              </div>
            </Link>

            <Link to="/blog/ai-chatbot-best-practices" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-3.jpg" 
                  alt="AI Chatbot Best Practices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded">AI Technology</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">10 Best Practices for AI Chatbots</h3>
                <p className="text-gray-600">Design chatbots that customers actually want to talk to.</p>
              </div>
            </Link>

            <Link to="/blog/conversational-ai-design" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src="/blog-conversation.jpg" 
                  alt="Conversational AI Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">Design</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Conversational AI Design Principles</h3>
                <p className="text-gray-600">Create natural, engaging AI conversations.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PsychologyOfAI;