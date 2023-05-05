import HeroImg from "../assets/hero-icon.svg";
const Hero = () => {
  function newFunc() {
    const client = createClient({
      space: "ains6w6nuchk",
      environment: "master", // defaults to 'master' if not set
      accessToken: import.meta.env.VITE_API_KEY,
    });
  }
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-title">
          <h2>contentful CMS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            reprehenderit. Assumenda voluptatem doloribus commodi accusantium
            alias suscipit similique tempora id ab aperiam, quos eligendi a
            recusandae quaerat odio, dolor saepe sequi culpa, sint aliquid
            dolorem quia. Quod reiciendis sapiente itaque.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
