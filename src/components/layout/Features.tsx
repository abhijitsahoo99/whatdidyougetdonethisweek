import React from "react";
import { FeatureCard } from "../ui/FeatureCard";
export const Features: React.FC = () => {
  const features = [{
    title: "Weekly Check-ins",
    description: "Get a friendly email every Friday. Just reply to share your progress.",
    bgColor: "bg-[rgba(210,210,253,1)]"
  }, {
    title: "AI Rating System",
    description: "Have your updates rated 0-10 for detail, impact, and measurable outcomes.",
    bgColor: "bg-[rgba(210,234,255,1)]"
  }, {
    title: "Smart Feedback",
    description: "Get personalized feedback to enhance your progress tracking and achievements.",
    bgColor: "bg-[rgba(236,255,253,1)]"
  }];
  return <section className="bg-white flex w-full flex-col overflow-hidden items-stretch justify-center px-16 py-[146px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-29px] items-center gap-[40px_41px] flex-wrap max-md:mb-2.5">
        <div className="self-stretch min-w-60 text-2xl text-black w-[363px] my-auto space-y-3">
          {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
        </div>
        <div className="self-stretch min-w-60 w-[748px] my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full">
          <div className="flex flex-col relative min-h-[540px] w-full pt-[78px] pb-2 px-[75px] max-md:max-w-full max-md:px-5">
            <img alt="Email interface demonstration" className="absolute h-full w-full inset-0 object-fill" src="/lovable-uploads/fe5410b4-511f-4646-8cd4-d3d322888b3b.png" />
            <div className="relative bg-white w-[537px] max-w-full overflow-hidden pb-[39px] rounded-[0px_0px_8px_8px]">
              {/* Email thread content */}
              <div className="email-thread space-y-5 p-3">
                {/* Email 1 */}
                <div className="email-message">
                  <div className="flex gap-3">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bae9a8057a703e2c317f99f8c0f20a99e3472a8f?placeholderIfAbsent=true" alt="ElonAI avatar" className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">ElonAI</span>
                        <span className="text-gray-500 text-xs">
                          &lt;whatdidyougetdonethisweek@gmail.com&gt;
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs">to me</div>
                      <p className="mt-2 text-sm">
                        Happy Friday, Abhijit.
                        <br />
                        What did you get done this week?
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300" />

                {/* Email 2 */}
                <div className="email-message">
                  <div className="flex gap-3">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc6dc42f6eeffdcd4bccd216f06ee51776b06ea?placeholderIfAbsent=true" alt="Abhijit avatar" className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">Abhijit Sahoo</span>
                        <span className="text-gray-500 text-xs">
                          &lt;abhijitsahooas.01@gmail.com&gt;
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs">to ElonAI</div>
                      <p className="mt-2 text-sm">
                        Happy Friday.
                        <br />
                        LoremIpusm Lorem Ipsum.Happy Friday.
                        <br />
                        LoremIpusm Lorem Ipsum.Happy Friday.
                        <br />
                        LoremIpusm Lorem Ipsum.Happy Friday.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300" />

                {/* Email 3 */}
                <div className="email-message">
                  <div className="flex gap-3">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bae9a8057a703e2c317f99f8c0f20a99e3472a8f?placeholderIfAbsent=true" alt="ElonAI avatar" className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold">ElonAI</span>
                        <span className="text-gray-500 text-xs">
                          &lt;whatdidyougetdonethisweek@gmail.com&gt;
                        </span>
                      </div>
                      <div className="text-gray-500 text-xs">to me</div>
                      <p className="mt-2 text-sm">
                        Great. on a scale of 10, i give you 5.
                        <br />
                        feedback is . lorem ipsum, lorem ipsum . feedback is .
                        lorem ipsum, lorem ipsum . feedback is . lorem ipsum,
                        lorem ipsum . feedback is . lorem ipsum, lorem ipsum .
                        feedback is . lorem ipsum, lorem ipsum . feedback is .
                        lorem ipsum, lorem ipsum . feedback is . lorem ipsum,
                        lorem ipsum .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};