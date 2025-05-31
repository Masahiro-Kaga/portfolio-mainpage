// スキルレベルに基づくスタイルを返すユーティリティ関数
export const getSkillLevelStyles = (level) => {
  if (level >= 75) {
    return {
      iconBg: "items-end bg-[url('../public/img/background_fire2.gif')]",
      animation: "animate-bounce",
      levelName: "Super Saiyan",
      levelRange: "75 ~ 100"
    };
  } else if (level >= 50) {
    return {
      iconBg: "items-center bg-[gold]",
      animation: "",
      levelName: "Gold",
      levelRange: "50 ~ 74"
    };
  } else if (level >= 25) {
    return {
      iconBg: "items-center bg-[silver]",
      animation: "",
      levelName: "Silver",
      levelRange: "25 ~ 49"
    };
  } else {
    return {
      iconBg: "items-center bg-[#cc6633]",
      animation: "",
      levelName: "Bronze",
      levelRange: "0 ~ 24"
    };
  }
};

// 共通のスキルアイコンコンポーネント
export const SkillIcon = ({ image, level, alt }) => {
  const styles = getSkillLevelStyles(level);
  
  return (
    <div key={`${alt}-${level}`}>
      <div className="h-16 w-16 border-2 m-2 rounded-lg border-white overflow-hidden">
        <div className={`bg-cover h-full w-full flex bg-white justify-center ${styles.iconBg}`}>
          <img
            src={image}
            alt={alt}
            className={`w-12 h-12 ${styles.animation}`}
          />
        </div>
      </div>
      <p className="text-center text-[14px] text-white font-dosis">
        {alt}
      </p>
    </div>
  );
};

// プロジェクトカードで使用される共通のSVGアイコン
export const ArrowRightIcon = ({ className = "ml-2 -mr-1 w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// 外部リンク用の共通プロパティ
export const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer"
};

// 共通のアニメーションクラス
export const animationClasses = {
  fadeIn: "animate-fadeAnim",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  blink: "blink"
};

// Slick carousel の共通設定
export const getSliderSettings = (open = false) => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: open ? 1 : 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  arrows: false,
});

// 共通のセクションタイトルコンポーネント
export const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`text-4xl py-20 font-bold text-center font-dosis ${className}`}>
    {children}
  </h2>
);
