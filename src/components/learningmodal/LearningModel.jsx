import React from 'react';

const LearningModel = () => {
  return (
    <div className="learning-model-container pt-24 pb-24 py-20 px-4">
      <div className="content-grid relative">
        <div className="display-v3-m-none tracker-index absolute z-0 border-dashed border-t-0 border-l-0 border-r-0 top-[-120px] left-0 text-gray-400 h-[120px] w-0">
          <div className="absolute top-[132px] transform -translate-x-1/2 -translate-y-1/2">
            <img
              alt=""
              src="https://files.codingninjas.com/frame-1000003333-1-32928.svg"
              className="h-auto w-auto"
            />
          </div>
          <div className="border-t border-l border-r border-gray-300 ml-[-1px] h-[120px] w-0" />
        </div>
        <div className="display-flex-row gap-4 mb-16  ml-9">
          <img
            alt="side notch"
            src="https://files.codingninjas.com/frame-1000003333-32610.svg"
            className="hidden md:block"
          />
          <h2 className="text-2xl font-semibold m-0">
            A 3-stage learning model to turn you into a Coding Ninja
          </h2>
        </div>

        <div className="learning-steps-wrapper">
          <div className="flex-col  items-center gap-6 md:h-[372px]">
            <div id="cardsContainer" className="cards-container flex-col md:flex-row gap-8">
              <div id="cardContainer0" className="w-full md:w-80">
                <div className="learning-model-card flex-row gap-5 cursor-pointer light-theme">
                  <div className="card-left-border light">
                    <div
                      className="card-left-border-inner"
                      style={{
                        width: '2px',
                        marginLeft: '-2px',
                        background: 'black',
                      }}
                    ></div>
                  </div>
                  <div className="flex-col gap-2 w-72 md:w-80">
                    <div className="text-lg font-medium">Learn</div>
                    <div className="text-sm">
                      Experience seamless learning with problem-solving modules, leaderboard, and awards.
                    </div>
                  </div>
                </div>
              </div>
              <div id="cardContainer1" className="w-full md:w-80">
                <div className="learning-model-card flex-row gap-5 cursor-pointer light-theme">
                  <div className="card-left-border light">
                    <div
                      className="card-left-border-inner"
                      style={{
                        width: '2px',
                        marginLeft: '-2px',
                        background: 'black',
                      }}
                    ></div>
                  </div>
                  <div className="flex-col gap-2 w-72 md:w-80">
                    <div className="text-lg font-medium">Excel</div>
                    <div className="text-sm">
                      Track your skill level and make meaningful progress for you to grow.
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full md:w-100 hidden md:block">
                  <img
                    alt="Excel"
                    className="w-full"
                    src="https://files.codingninjas.com/mobile_excel-33052.webp"
                  />
                </div>
              </div>
              <div id="cardContainer2" className="w-full md:w-80">
                <div className="learning-model-card flex-row gap-5 cursor-pointer light-theme selected">
                  <div className="card-left-border light">
                    <div
                      className="card-left-border-inner"
                      style={{
                        width: '2px',
                        marginLeft: '-2px',
                        background: 'black',
                      }}
                    ></div>
                  </div>
                  <div className="flex-col gap-2 w-72 md:w-80">
                    <div className="text-lg font-medium">Standout</div>
                    <div className="text-sm">
                      Standout to recruiters, showcase ratings, get feedback, and interview insights.
                    </div>
                  </div>
                </div>
                <div className="mt-8 w-full md:w-100 hidden md:block">
                  <img
                    alt="Standout"
                    className="w-full"
                    src="https://files.codingninjas.com/mobile_standout-33054.webp"
                  />
                </div>
              </div>
            </div>

            <div className="controls w-full hidden md:flex-row justify-center items-center gap-2 light-theme">
              <div className="control-button rounded-full cursor-pointer w-8 h-8 border border-gray-200"></div>
              <div className="control-button rounded-full cursor-pointer w-8 h-8 border border-gray-200"></div>
              <div className="control-button rounded-full cursor-pointer w-8 h-8 border border-gray-200 bg-gray-200"></div>
            </div>

            <div className="hidden md:block">
              <img
                alt="Standout"
                className="w-full"
                src="https://files.codingninjas.com/web_learn-33056.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModel;
