import React from "react";

const Contact = () => {
  const showModalHandler = () => {
    localStorage.setItem("sent", true);
  };

  return (
    <>
      <form
        onSubmit={showModalHandler}
        name="contact-form"
        method="POST"
        data-netlify="true"
        className="bg-gray-800 text-gray-100 px-8 py-32"
        id="contact"
      >
        <input type="hidden" name="form-name" value="contact-form"></input>
        <div className="text-center w-full flex flex-col justify-center items-center">
          <p className="font-dosis font-bold text-4xl py-20">Contact Me</p>
          <br />
          <p className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center">
            {/* I would like to contribute you and your company with my skills by all means.<br /> */}
            Feel free to say hi to me, then I will reply in
            a day.😄✋
          </p>
        </div>
        <div className="max-w-screen-xl mt-14 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Name
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
                type="text"
                placeholder=""
                name="name"
                required
              ></input>
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
                type="text"
                placeholder=""
                name="email"
                required
              ></input>
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline"
                placeholder=""
                name="comment"
                required
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-md lg:text-xl font-bold leading-tight flex-none">
              Please check my SNS accounts out too👍
            </h2>
            <div className="flex justify-around flex-none">
              {/* <a href="https://www.facebook.com/profile.php?id=100005520977852">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/sns/output-onlinegiftools.gif`}
                      alt=""
                    />
                  </div>
                </a>
                <a href="https://www.instagram.com/masahiro_kaga/?hl=ja">
                  <svg
                    id="instagram-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#C13584"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a> */}
              <a
                href="https://www.facebook.com/profile.php?id=100005520977852"
                target="blank"
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/sns/facebook_anime3.gif`}
                    alt="Link to facebook page"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/masahiro_kaga/?hl=ja"
                target="blank"
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/sns/instagram_anime3.gif`}
                    alt="Link to facebook page"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/masahiro-kaga-ab8604192/"
                target="blank"
              >
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/sns/linkedin_anime.gif`}
                    alt=""
                  />
                </div>
              </a>
              <a href="https://twitter.com/kaga_masahiro" target="blank">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/sns/x_anime.gif`}
                    alt=""
                  />
                </div>
              </a>
              <a href="https://discord.gg/MEtUuWDA" target="blank">
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/sns/discord_anime.gif`}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <h2 className="text-md lg:text-xl font-bold leading-tight flex-none mb-4">
              I live in Vancouver , Canada🇨🇦
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.35775811192!2d-123.19394348746846!3d49.257826320072006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z44OW44Oq44OG44Kj44OD44K344Ol44Kz44Ot44Oz44OT44Ki5beeIOODkOODs-OCr-ODvOODkOODvA!5e0!3m2!1sja!2sca!4v1646765379711!5m2!1sja!2sca"
              className="flex-grow rounded-lg"
              title="Google map for where I live"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
