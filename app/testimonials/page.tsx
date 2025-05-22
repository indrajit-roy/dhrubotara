import { title } from "@/components/primitives";

export default function TestimonialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className={`${title()} text-center mb-12`}>Customer Testimonials</h1>

      <div className="space-y-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            DhruboTara for Cough and Cold
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <blockquote className="text-gray-700 italic">
                &quot;I was suffering from a persistent cough. It initially
                occurred at night which disturbed my sleep. Then slowly it began
                to occur during the day as well. Soon I was diagnosed with GERD
                (gastro- esophageal reflux disease). Sonography reports
                indicated that I have a Hiatal hernia. It was symptomatic and
                cannot be cured through surgery. I will have to take care of my
                diet. Rumi&apos;s medicines gave me a huge respite.&quot;
              </blockquote>
              <p className="mt-2 text-gray-600">- Anonymous</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 mt-8">
              <blockquote className="text-gray-700 italic">
                &quot;I have been using Mrs. Sushmita Sengupta&apos;s medicines
                for cough and cold for over a month now. They are indeed
                extremely effective in providing me with great relief. I would
                like to convey my heartfelt thanks to her for recommending
                this.&quot;
              </blockquote>
              <p className="mt-2 text-gray-600">- Shiladitya Sen</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 mt-8">
              <blockquote className="text-gray-700 italic">
                &quot;I have been suffering from cough and cold for over a
                month. Antibiotics and other medicines failed to provide any
                respite. 15 days ago, thankfully, I came across Kashyam Mrs.
                Sengupta&apos;s totka for cough and cold. I started taking it
                four times a day. Now, my cough is gone, and the discomfort and
                irritation has reduced significantly.&quot;
              </blockquote>
              <p className="mt-2 text-gray-600">
                - Nandita Dey, Professor (Retd, C.U.)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            DhruboTara Hair Oil
          </h2>
          <div className="border-l-4 border-green-500 pl-4">
            <blockquote className="text-gray-700 italic">
              &quot;I used the Hair Oil. Very effective for my hair texture
              which is curly and dry. It also reduces hair fall. Overall, an
              excellent product and a must try for everyone&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">- Indrani Basu, Exporter</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            DhruboTara for Gut Health
          </h2>
          <div className="border-l-4 border-green-500 pl-4">
            <blockquote className="text-gray-700 italic">
              &quot;The digestive powder gave fast relief to heart burn. Only 2
              spoonful was enough to get rid of the irritation of indigestion
              and heart burn. 100% Recommended.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">- Indrani Basu, Exporter</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            General Wellness
          </h2>
          <div className="border-l-4 border-green-500 pl-4">
            <blockquote className="text-gray-700 italic">
              &quot;It was heartening to hear about your home-made medicine
              after years of suffering. It is a holistic treatment that uses all
              natural ingredients. I am 90% ok. And I am sure that the remaining
              10% will also go away. At least, I don&apos;t use an elevated
              pillow now.&quot;
              <br />
              <br />
              &quot;Rumi, I wish you and your team all the very best. I
              experienced absolutely no side effects after using your medicines.
              In fact, I and my sister bought all your ingredients once...so
              it&apos;s a proven fact that you use all natural
              ingredients.&quot;
            </blockquote>
            <p className="mt-2 text-gray-600">
              - Shubhra Chowdhury, Teacher (Retd.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
