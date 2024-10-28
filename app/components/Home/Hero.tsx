const Hero = () => {
  return (
    <section className="text-center py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-500 font-semibold">Analysis, Research, Problem Solving</p>
        <h1 className="text-5xl font-bold mt-4">Find yourself in a Great Book</h1>
        <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus risus vel rutrum.</p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Get Started</button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg">Learn More</button>
        </div>
        <div className="mt-12">
          <img src="/assets/1.png" alt="Book Illustration" className="mx-auto w-[30rem]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
