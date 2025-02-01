import { Col, Row } from "antd";
import "../assets/css/about/about.css";

function About() {
  return (
    <>
      <Row gutter={[16, 16]} className="about-page">
        <Col span={24}>
          <div className="description-section">
            <p className="para-description">
              Welcome to <span className="website-name">Fake BookShop</span>,
              where the world of books comes to life! At our core, we are
              passionate about connecting readers with the stories, knowledge,
              and inspiration they seek. Established with the vision to make
              books accessible to everyone, everywhere, we are proud to offer a
              vast collection that caters to every reader’s interest.
            </p>
          </div>

          <div className="description-section">
            <h3 className="para-title">What We Offer</h3>
            <p className="para-description">
              From timeless classics to contemporary bestsellers, academic
              resources to niche genres, our collection spans every category
              imaginable. Whether you're a fiction fanatic, a history buff, a
              science enthusiast, or a self-help seeker, we have something
              special just for you.
            </p>
          </div>

          <div className="description-section">
            <h3 className="para-title">Our Global Reach</h3>
            <p className="para-description">
              We believe books have no boundaries, and neither do we. Our
              extensive network allows us to bring books from all corners of the
              globe to your doorstep. With worldwide shipping and a
              user-friendly online platform, we ensure that every book lover can
              find and receive the titles they cherish.
            </p>
          </div>

          <div className="description-section">
            <h3 className="para-title">Why Choose Us?</h3>
            <ul>
              <li>
                <span className="list-header">Unmatched Variety:</span>A
                collection of books from every genre, author, and language.
              </li>
              <li>
                <span className="list-header">Quality Assurance:</span>Only the
                best editions, delivered with care.
              </li>
              <li>
                <span className="list-header">Reader-Centric Service:</span>A
                commitment to making your reading journey seamless and
                enjoyable.
              </li>
              <li>
                <span className="list-header">Global Community:</span>Connecting
                readers worldwide, united by their love for books.
              </li>
            </ul>
          </div>

          <div className="description-section">
            <h3 className="para-title">Our Mission</h3>
            <p className="para-description">
              At <span className="website-name">Fake BookShop</span>, our
              mission is simple: to inspire, educate, and entertain by providing
              books that enrich lives. We are more than just a bookstore – we
              are a community for readers, dreamers, and learners.
            </p>
          </div>
          <div className="description-section">
            <h3 className="para-title">Join Our Story</h3>
            <p className="para-description">
              We invite you to explore our collection, share your love for
              books, and join us on this journey of discovery. Together, let’s
              keep the magic of reading alive!
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default About;
