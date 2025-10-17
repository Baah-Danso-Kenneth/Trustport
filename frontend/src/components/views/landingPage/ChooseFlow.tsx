import React from 'react';
import Image from 'next/image';

import FastImage from '../../../../public/images/bolt.svg';
import ArrowImage from '../../../../public/images/arrowdown.svg';
import WriggleImage from '../../../../public/images/wriglly.svg';
import DefaultText from '@/components/shared/DefaultTitle';
import Card from '@/components/content/cards/Card';

function ChoosePayFlow() {
  return (
    <section className="mb-20">
      {/* --- WHY CHOOSE KINETIC --- */}
      <DefaultText
        className="mb-10 font-poltwaski dark:text-custom-gradient md:text-[50px] capitalize text-center"
        title="Why Choose Kinetic?"
      />

      <div className="grid overflow-hidden grid-cols-1 lg:grid-cols-3 gap-10 mx-5 md:mx-10 lg:mx-20">
        <Card
          title="Instant Setup"
          image={FastImage}
          buttonClassName="mt-10 ml-10"
          imageClassName="top-28 right-20"
          description="Create your merchant account and start accepting Bitcoin or Stacks payments in under 2 minutes. No complex setup or coding required."
        />

        <Card
          title="Lower Fees"
          image={ArrowImage}
          buttonClassName="mt-[20rem] ml-5"
          imageClassName="top-[13rem] right-[-2rem]"
          description="Keep more of what you earn. Pay only 1% per transaction with zero hidden costs or monthly charges."
        />

        <Card
          title="Seamless Sharing"
          image={WriggleImage}
          buttonClassName="mt-[20rem] ml-5"
          imageClassName="top-[2rem] right-[1rem]"
          description="Share your product links anywhere — social media, email, or chat — and get paid instantly across borders."
        />
      </div>

      {/* --- HOW IT WORKS --- */}
      <DefaultText
        className="mt-20 mb-10 font-poltwaski text-4xl md:text-5xl dark:text-custom-gradient text-center"
        title="How It Works"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 lg:px-20 text-center">
        {[
          'Create your account',
          'Add your product',
          'Share your link',
          'Receive payments',
        ].map((step, i) => (
          <button
            key={i}
            className="border border-gray-400 dark:border-gray-700 rounded-full p-5 text-lg md:text-xl font-semibold capitalize transition-all hover:scale-105 hover:tm-gradient hover:text-white duration-300"
          >
            {step}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ChoosePayFlow;
