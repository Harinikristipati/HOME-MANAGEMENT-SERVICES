import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div style={styles.pageBackground}>
        <div style={styles.container}>
          <h1 style={styles.title}>About Us</h1>
          <div style={styles.paragraphContainer}>
            <div style={styles.textContainer}>
              <h1 style={styles.subTitle}>About</h1>
              <h2 style={styles.paragraph}>
                Welcome to our House Services website!
                <br></br>
                We are a team of dedicated professionals providing top-notch home maintenance and cleaning services to homeowners in various cities.
                <br></br>
                Our mission is to ensure your home is in great shape and well-maintained, so you can focus on what matters most to you.
              </h2>
            </div>
            <div style={styles.imageContainer}>
              <img
                src={"https://www.vblue.in/simg/house-cleaning.jpg"}
                alt="About Us"
                style={styles.image}
              />
            </div>
            <br></br>
            <br></br>
          </div>
          <div style={styles.paragraphContainer}>
            <div style={styles.imageContainer}>
              <img
                src={
                  "https://png.pngtree.com/png-clipart/20220729/original/pngtree-isometric-professional-house-cleaning-service-team-at-work-png-image_8437079.png"
                }
                alt="Experience"
                style={styles.anotherImage}
              />
            </div>
            <div style={styles.textContainer}>
              <h1 style={styles.subTitle}>Experience</h1>
              <h2 style={styles.paragraph}>
                With years of experience and a passion for excellence, our skilled technicians and cleaners are committed to delivering outstanding results every time.
                <br></br>
                Whether it's painting, plumbing, electrical work, or general house cleaning, we've got you covered.
                <br></br>
                Our services are designed to meet your unique needs and enhance the comfort and aesthetics of your home.
              </h2>
            </div>
          </div>
          <div style={styles.paragraphContainer}>
            <div style={styles.textContainer}>
              <h1 style={styles.subTitle}>Customer Satisfaction</h1>
              <h2 style={styles.paragraph}>
                We take great pride in our attention to detail and customer satisfaction. Our team is trained to handle any project, big or small, with efficiency and professionalism. Your trust in us is of utmost importance, and we strive to build long-lasting relationships with our valued customers.
              </h2>
            </div>
            <div style={styles.imageContainer}>
              <img
                src={
                  "https://content.pymnts.com/wp-content/uploads/2019/07/home-services-investments.jpg"
                }
                alt="Customer Satisfaction"
                style={styles.image}
              />
            </div>
          </div>
          <div style={styles.paragraphContainer}>
            <div style={styles.imageContainer}>
              <img
                src={
                  "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-house-cleaning-services-and-industrial-cleaners-teams-4-flat-compositions-with-png-image_5205286.png"
                }
                alt="Eco-Friendly Practices"
                style={styles.anotherImage}
              />
            </div>
            <div style={styles.textContainer}>
              <h1 style={styles.subTitle}>Eco-Friendly Practices</h1>
              <h2 style={styles.paragraph}>
                At House Services, we are committed to sustainability and eco-friendly practices.
                <br></br>
                We use environmentally safe products and processes to minimize our impact on the environment while ensuring the safety of your family and pets.
              </h2>
            </div>
          </div>
          <h4 style={styles.thankYou}>
            Thank you for choosing House Services for your home maintenance needs. We look forward to serving you and making your house a more comfortable and beautiful place to live. If you have any questions or need assistance, feel free to contact our friendly customer support team.
          </h4>
        </div>
      </div>
    );
  }
}

const styles = {
  pageBackground: {
    background: "#f7f7f7",
  },
  container: {
    padding: "20px",
    height: "500px",
    background: "#f7f7f7",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  subTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  imageContainer: {
    flex: 1,
    maxWidth: "50%",
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: "470px",
    height: "380px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "2px solid green", // Add border to images
  },
  anotherImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "2px solid green", // Add border to images
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
    width: "100%",
    color: "blue",
  },
  thankYou: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginTop: "40px",
    textAlign: "center",
    color:"blue",
  },
};

export default About;
