const StatisticsSection = () => {
  return (
    <div>
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            <div>
              <p className="text-4xl text-indigo-900 font-bold">25+</p>
              <p className="text-slate-500 font-medium">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl text-indigo-900 font-bold">500+</p>
              <p className="text-slate-500 font-medium">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl text-indigo-900 font-bold">100%</p>
              <p className="text-slate-500 font-medium">Vaasthu Compliance</p>
            </div>
            <div>
              <p className="text-4xl text-indigo-900 font-bold">450+</p>
              <p className="text-slate-500 font-medium">Happy Families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticsSection;
