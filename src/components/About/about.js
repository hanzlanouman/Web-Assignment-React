import logo from '../../assets/logo.png';
import '../../about.css';
const About = () => {
  return (
    <div class='container'>
      <h1>About Us</h1>
      <p>
        Little Lemon is a family-owned restaurant that opened its doors in 2010.
        Our mission is to provide our customers with a unique and unforgettable
        dining experience.
      </p>
      <p>
        We specialize in fresh, high-quality ingredients that are locally
        sourced whenever possible. Our menu features a range of dishes inspired
        by traditional recipes from around the world, as well as modern fusion
        cuisine.
      </p>
      <p>
        Whether you're in the mood for a casual lunch with friends, a romantic
        dinner for two, or a special celebration with family, we have something
        for everyone. Our friendly and knowledgeable staff will be happy to help
        you select the perfect meal and beverage pairing.
      </p>
      <p>
        Thank you for considering Little Lemon for your next dining experience.
        We look forward to serving you soon!
      </p>
      <img src={logo} alt='' />
    </div>
  );
};

export default About;
