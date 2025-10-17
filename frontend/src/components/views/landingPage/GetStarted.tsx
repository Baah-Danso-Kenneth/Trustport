import DefaultText from "@/components/shared/DefaultTitle";

function GetStarted() {
  return (
    <section className="w-full flex flex-col items-center text-center pt-20 pb-16 px-6 md:px-16 lg:px-24">
      {/* Title */}
      <DefaultText
        className="text-2xl md:text-4xl lg:text-5xl font-poltwaski mb-6 dark:text-custom-gradient text-dark"
        title="Get Started Today"
      />

      {/* Paragraph */}
      <p className="font-pop text-darkGrayHue dark:text-light text-base md:text-lg leading-relaxed max-w-2xl">
        Ready to revolutionize your payment experience? Join thousands of creators who trust{" "}
        <span className="font-semibold text-dark dark:text-custom-gradient">Kinetic</span> for their
        crypto payments. No credit card required  start accepting payments in minutes.
      </p>

      {/* CTA Button */}
      <div className="mt-8 lg:mt-16">
        <button
          className="border border-dark dark:border-light px-8 py-3 rounded-full text-lg md:text-xl capitalize font-semibold
          transition-all duration-300 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
        >
          Create free account
        </button>
      </div>
    </section>
  );
}

export default GetStarted;
