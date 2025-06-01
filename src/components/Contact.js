import React, { useState } from "react";
import { SectionTitle, externalLinkProps } from "../utils/commonUtils";

// Form input styling utility
const inputClasses = "w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline";
const labelClasses = "uppercase text-sm text-gray-600 font-bold";

// SNS links configuration
const snsLinks = [
  {
    key: "linkedin",
    name: "LinkedIn",
    alt: "Link to LinkedIn page",
    gif: "linkedin_anime.gif",
    url: "https://www.linkedin.com/in/masahiro-kaga-ab8604192/",
  },
  {
    key: "facebook",
    name: "Facebook",
    alt: "Link to Facebook page",
    gif: "facebook_anime3.gif",
  },
  {
    key: "instagram",
    name: "Instagram",
    alt: "Link to Instagram page",
    gif: "instagram_anime3.gif",
  },
  {
    key: "twitter",
    name: "Twitter/X",
    alt: "Link to Twitter/X page",
    gif: "x_anime.gif",
  },
  // {
  //   key: 'discord',
  //   name: 'Discord',
  //   alt: 'Link to Discord server',
  //   gif: 'discord_anime.gif',
  //   url: 'https://discord.gg/MEtUuWDA'
  // }
];

// SNS Link Component
const SnsLink = ({ href, alt, gif, name }) => (
  <a href={href} {...externalLinkProps}>
    <div className="w-16 h-16 md:w-16 md:h-16">
      <img
        src={`${process.env.PUBLIC_URL}/img/sns/${gif}`}
        alt={alt}
        title={name}
        className="w-full h-full object-contain"
      />
    </div>
  </a>
);

// Form Field Component
const FormField = ({ label, type = "text", name, required = false, isTextarea = false }) => (
  <div className={isTextarea ? "mt-8" : type === "text" && name === "name" ? "" : "mt-8"}>
    <span className={labelClasses}>{label}</span>
    {isTextarea ? (
      <textarea className={`${inputClasses} h-32`} placeholder="" name={name} required={required} />
    ) : (
      <input className={inputClasses} type={type} placeholder="" name={name} required={required} />
    )}
  </div>
);

const Contact = ({ pageType = "job", styleType = "casual" }) => {
  const showModalHandler = () => {
    localStorage.setItem("sent", true);
  };

  const [facebookUrl] = useState("https://www.facebook.com/masahiro.kaga.102");
  const [instagramUrl] = useState("https://www.instagram.com/masahirokaga/");
  const [twitterUrl] = useState("https://twitter.com/MK9703620381397");

  // 日本からのアクセス時にSNSリンクを変更するためのコード

  // useEffect(() => {
  //   const getIpCountry = async() => {
  //     const url = "https://ipapi.co/json/";
  //     const ipInfo = await axios.get(url);
  //     if(ipInfo.data.country_code === "JP"){
  //       setFacebookUrl("https://www.facebook.com/profile.php?id=100005520977852");
  //       setInstagramUrl("https://www.instagram.com/macchohiro_gram/?hl=ja");
  //       setTwitterUrl("https://twitter.com/kaga_masahiro");
  //     }
  //   }
  //   getIpCountry();
  // }, []);

  const getSnsUrl = (linkKey) => {
    switch (linkKey) {
      case "facebook":
        return facebookUrl;
      case "instagram":
        return instagramUrl;
      case "twitter":
        return twitterUrl;
      default:
        return snsLinks.find((link) => link.key === linkKey)?.url || "#";
    }
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
          <SectionTitle>Contact</SectionTitle>
          <br />
          {styleType !== "formal" && (
            <p className="sm:w-[50vw] mx-3 tracking-tight text-xl text-center">
              Feel free to say hi to me, then I will reply in a day.😄✋
            </p>
          )}
        </div>
        <div className="max-w-screen-xl mt-14 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="">
            <FormField label="Name" name="name" required />
            <FormField label="Email" type="email" name="email" required />
            <FormField label="Message" name="comment" required isTextarea />
            <div className="mt-8">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex-none">
              {styleType === "formal" ? (
                <h2 className="text-md lg:text-xl font-bold leading-tight mb-4">
                  Professional Networks
                </h2>
              ) : (
                <h2 className="text-md lg:text-xl font-bold leading-tight mb-4">
                  Please check my SNS accounts out too👍
                </h2>
              )}
              <div className="flex justify-between mb-8 px-2 md:px-4">
                {snsLinks.map((link) => (
                  <SnsLink
                    key={link.key}
                    href={getSnsUrl(link.key)}
                    alt={link.alt}
                    gif={link.gif}
                    name={link.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-md lg:text-xl font-bold leading-tight mb-4">
                Based in Canada and Japan 🇨🇦🇯🇵
              </h2>

              {/* デスクトップ・タブレット横向き: 左右に地図配置 */}
              <div className="hidden md:block md:landscape:flex md:landscape:gap-4 md:landscape:flex-row h-full">
                {/* バンクーバー */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold mb-2 text-center">Vancouver, Canada</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.35775811192!2d-123.19394348746846!3d49.257826320072006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z44OW44Oq44OG44Kj44OD44K344Ol44Kz44Ot44Oz44OT44Ki5beeIOODkOODs-OCr-ODvOODkOODvA!5e0!3m2!1sja!2sca!4v1646765379711!5m2!1sja!2sca"
                    className="w-full flex-1 rounded-lg min-h-[200px]"
                    title="Vancouver, Canada"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* 北海道 */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold mb-2 text-center">Hokkaido, Japan</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523811.4956077915!2d141.3544493!3d43.2203266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2399993eb73d%3A0x41f4f3b564c2130f!2z5YyX5rW36YGT!5e0!3m2!1sja!2sca!4v1646765379711!5m2!1sja!2sca"
                    className="w-full flex-1 rounded-lg min-h-[200px]"
                    title="Hokkaido, Japan"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* スマートフォン・タブレット縦向き: 縦に地図配置 */}
              <div className="md:landscape:hidden flex flex-col gap-4 h-full">
                {/* バンクーバー */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold mb-2 text-center">Vancouver, Canada</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.35775811192!2d-123.19394348746846!3d49.257826320072006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z44OW44Oq44OG44Kj44OD44K344Ol44Kz44Ot44Oz44OT44Ki5beeIOODkOODs-OCr-ODvOODkOODvA!5e0!3m2!1sja!2sca!4v1646765379711!5m2!1sja!2sca"
                    className="w-full h-40 rounded-lg"
                    title="Vancouver, Canada"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* 北海道 */}
                <div className="flex-1">
                  <h3 className="text-sm font-semibold mb-2 text-center">Hokkaido, Japan</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523811.4956077915!2d141.3544493!3d43.2203266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2399993eb73d%3A0x41f4f3b564c2130f!2z5YyX5rW36YGT!5e0!3m2!1sja!2sca!4v1646765379711!5m2!1sja!2sca"
                    className="w-full h-40 rounded-lg"
                    title="Hokkaido, Japan"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
