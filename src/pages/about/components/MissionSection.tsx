import { Award, Globe, Target } from 'lucide-react'


function MissionSection() {
  return (
    <section className="px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400" 
              alt="Team collaboration" 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400" 
              alt="Modern office" 
              className="rounded-lg w-full h-64 object-cover mt-8"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We believe in a world where managing subscriptions should be effortless. 
              Our mission is to provide transparency and control in the subscription economy, 
              helping both individuals and businesses make informed decisions about their digital investments.
              We strive to empower our users with the tools they need to optimize their subscription experiences,
              ensuring they get the most value from their investments.
              <br/><br/>
              At Subrella, we are committed to innovation, security, and customer satisfaction.
              We continuously enhance our platform with cutting-edge features and robust security measures,
              ensuring that our users can manage their subscriptions with confidence.
              Our dedicated support team is always ready to assist, ensuring that our users have a seamless experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="text-blue-700 w-6 h-6" />
                <span className="text-gray-700">Global presence in 30+ countries</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-blue-700 w-6 h-6" />
                <span className="text-gray-700">Industry-leading security standards</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-blue-700 w-6 h-6" />
                <span className="text-gray-700">24/7 dedicated customer support</span>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}

export default MissionSection