/* eslint-disable jsx-a11y/alt-text */
import "./ondemandHero.css";
import heroImg from "../../images/hero-landscape.png";

const OndemandHero = (props) => {
  const { openModal } = props;

  return (
    <div className="ondemandHero-container">
      <div
        className="ondemandHero-background"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="ondemandHero-leftContainer">
        <p style={{ fontSize: "16px", fontWeight: 700 }}>Webinar</p>

        <h1>Embracing an AI mindset in business and in life</h1>

        <p className="ondemandHero-subTitle">On-demand &bull; 60 minutes</p>

        <p className="ondemandHero-description">
          Artificial Intelligence is not just transforming technology; it is
          reshaping how we do business and how we function as a society. We all
          know a bit more about AI than we did 18 months ago, but what does it
          take to go from concept to action - how do we all better utilize AI?
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="ondemandHero-badgeContainer">
            <div className="badge blue95">Einstein</div>
            <div className="badge blue95">Customer 360 Platform</div>
          </div>

          <div className="ondemandHero-socialLinks">
            <div className="social-sharing" data-component="social-sharing">
              <ul className="social-sharing__nav">
                <li className="social-sharing__item share-the-story-text">
                  <p>Share</p>
                </li>
                <li className="social-sharing__item">
                  <a
                    href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.salesforce.com/customer-stories/spotify-customer-story&amp;title=Customer Story Spotify"
                    className="social-sharing__linkedin-icon"
                    aria-label="Share on LinkedIn (Opens in a new tab)"
                    data-link-text="LinkedIn"
                    data-link-url="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.salesforce.com/customer-stories/spotify-customer-story&amp;title=Customer Story Spotify"
                    data-link-type="text link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-sharing__white-square">
                      <img
                        src="https://a.sfdcstatic.com/shared/images/pbc/icons/linkedin.svg"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
                <li className="social-sharing__item">
                  <a
                    href="https://twitter.com/intent/tweet?text=Customer Story Spotify&amp;url=https://www.salesforce.com/customer-stories/spotify-customer-story"
                    className="social-sharing__x-icon"
                    aria-label="Share on X (Opens in a new tab)"
                    data-link-text="X"
                    data-link-url="https://twitter.com/intent/tweet?text=Customer Story Spotify&amp;url=https://www.salesforce.com/customer-stories/spotify-customer-story"
                    data-link-type="text link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-sharing__white-square">
                      <img
                        src="https://a.sfdcstatic.com/shared/images/pbc/icons/x-icon.svg"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
                <li className="social-sharing__item">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.salesforce.com/customer-stories/spotify-customer-story"
                    className="social-sharing__facebook-icon"
                    aria-label="Share on Facebook (Opens in a new tab)"
                    data-link-text="Facebook"
                    data-link-url="https://www.facebook.com/sharer/sharer.php?u=https://www.salesforce.com/customer-stories/spotify-customer-story"
                    data-link-type="text link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="social-sharing__white-square">
                      <img
                        src="https://a.sfdcstatic.com/shared/images/pbc/icons/facebook.svg"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
                <li className="social-sharing__item">
                  <div className="social-sharing__tooltip">
                    <button
                      className="social-sharing__copy-link-icon tooltip"
                      title="Link Copied"
                      data-link-text="Link Copied"
                      data-link-url="tooltip"
                      data-link-type="tooltip"
                      aria-describedby="tooltip"
                    >
                      <div
                        className="social-sharing__current-link tooltip_icon"
                        data-clipboard-text="https://www.salesforce.com/customer-stories/spotify-customer-story"
                      >
                        <div className="social-sharing__white-square">
                          <img
                            src="https://a.sfdcstatic.com/shared/images/pbc/icons/copy-link.svg"
                            height="auto"
                            width="auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <span
                        className="tooltip_top_position_arrow_center tooltip_text"
                        role="tooltip"
                      >
                        <p>Link Copied</p>
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          className="pbc-button"
          data-variant="primary"
          style={{ marginTop: "40px" }}
          onClick={openModal}
        >
          Watch now
        </button>
      </div>

      <div className="ondemandHero-rightContainer"></div>
    </div>
  );
};

export default OndemandHero;
