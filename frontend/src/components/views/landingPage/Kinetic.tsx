function Kinetic() {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px] overflow-hidden">
      <h1
        className="uppercase text-center font-poltwaski text-outline font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          fontSize: '22vw',
          filter: 'blur(1px)',
          WebkitMaskImage:
            'linear-gradient(to bottom, white 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, white 70%, transparent 100%)',
        }}
      >
        Kinetic
      </h1>
    </div>
  );
}

export default Kinetic