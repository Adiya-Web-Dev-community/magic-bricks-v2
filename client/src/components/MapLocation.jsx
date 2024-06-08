const MapLocation = () => {
  return (
    <div className="mt-5 w-full border-2 h-[15rem]">
      <iframe
        src={`https://maps.google.com/maps?q=Umm Suqeim St Al Barsha, Dubai, UAE&hl=es;&output=embed`}
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default MapLocation;
