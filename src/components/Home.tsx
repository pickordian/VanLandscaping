import HeroImg from "../assets/home/HeroImg1.jpg";
function Home() {
  return (
    
      <section id="Hero">
        <div>
          <h1>Professional landscaping services in WA</h1>
          <p>
            {" "}
            With over a decade experience, we deliver exceptional, top-quality
            care for lawns, trees, cleanup, and fencing—all at{" "}
            <strong>competitive rates</strong> with{" "}
            <strong>free estimate.</strong>
          </p>
          <div className="CTA-hero-btns">
            <a href="tel:+14252453647"> Call us</a>
            <a href="mailto: khanhcvan263@gmail.com" className="CTA-link">
              {" "}
              Email us: khanhcvan263@gmail.com
            </a>
          </div>
        </div>
        <div>
          <img alt="A landscape done by Van's landscaping" src={HeroImg} />
        </div>
      </section>
    
  );
}

export default Home;
