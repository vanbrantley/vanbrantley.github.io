const Home = () => {

  return (
    <div className="flex flex-col">

      <div className="flex">
        <div className="flex flex-col">
          <img src="28.gif" />
          <img src="dfc843e4fc2b47380ce2579b9254a410.gif" />
          <p>Van Brantley</p>
          <p style={{ color: "white" }}>Doing things that I think are cool</p>
        </div>
        <div className="flex-grow bg-pink-300">
          <img src="pxArt.png" height="300px" width="300px" className="float-right" />
          <img src="pxArt (1).png" height="300px" width="300px" className="float-right" />
          <img src="pxArt (3).png" height="300px" width="300px" className="float-right" />
        </div>
      </div>

      <img src="headshot-px-9.png" />
      <img src="bnm(1).png" />

      <div className="flex items-center justify-center" style={{ height: "100px", backgroundColor: "#15421a" }}>
        <p className="shivering" style={{ color: "#d6682d", fontFamily: "p22-canterbury-pro", fontSize: "64px" }}>I'm coding again..</p>
      </div>

    </div>
  );

};

export default Home;