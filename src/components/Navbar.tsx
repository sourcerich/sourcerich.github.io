import React from "react";
import { FileText, Linkedin, Instagram } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

// Add motion‐wrapped icons:
const MotionFileText = motion(FileText);
const MotionLinkedin = motion(Linkedin);
const MotionInstagram = motion(Instagram);

const Navbar: React.FC = () => {
  const navbarStyle = {
    position: "fixed" as const,
    top: window.innerWidth < 500 ? undefined : "1.5rem",
    bottom: window.innerWidth < 500 ? "1.5rem" : undefined,
    left: "50%",
    transform: "translateX(-50%)",
    width: "75%",
    maxWidth: "75rem",
    minWidth: "max-content",
    padding: "1rem 1.5rem",

    // add a subtle radial glare for light-scattering
    background: `
    radial-gradient(circle at top left,
      rgba(255,255,255,0.25),
      rgba(255,255,255,0) 60%),
    linear-gradient(135deg,
      rgba(255,255,255,0.25),
      rgba(255,255,255,0.05))
  `,
    backdropFilter: "blur(0.75rem) saturate(300%) brightness(1)",

    border: "0.2rem solid rgba(0,0,0,0.05)",
    borderRadius: "1.5rem",
    boxShadow: `
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 4px 20px rgba(0, 0, 0, 0.1) inset,
    0 0 2px rgba(255,255,255,0.6) inset,
    0 0 30px 10px rgba(255,255,255,0.2)
  `,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
  };

  // Framer Motion for colorful light effect
  const controls = useAnimation();
  const [isHovered, setIsHovered] = React.useState(false);

  // Animate background on hover
  React.useEffect(() => {
    if (isHovered) {
      controls.start({
        boxShadow: [
          "0 0 40px 10px rgba(205, 180, 219,0.25), 0 20px 40px rgba(0, 0, 0, 0.05) inset",
          "0 0 40px 10px rgba(255, 200, 221,0.25), 0 20px 40px rgba(0, 0, 0, 0.05) inset",
          "0 0 40px 10px rgba(255, 175, 204,0.25), 0 20px 40px rgba(0, 0, 0, 0.05) inset",
          "0 0 40px 10px rgba(189, 224, 254,0.25), 0 20px 40px rgba(0, 0, 0, 0.05) inset",
          "0 0 40px 10px rgba(162, 210, 255,0.25), 0 20px 40px rgba(0, 0, 0, 0.05) inset",
        ],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
        },
      });
    } else {
      controls.start({
        boxShadow: navbarStyle.boxShadow,
        transition: { duration: 0.4 },
      });
    }
  }, [isHovered, controls]);
  React.useEffect(() => {
    const handleResize = () => {
      // Force update
      setDummyState((s) => !s);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [, setDummyState] = React.useState(false);

  const imageRoundBackground = {
    background: "linear-gradient(135deg, #b3e5fc 0%, #e1f5fe 100%)",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: `
      0 0 10px 2px #fbfbff, /* blue glow around the image */
      0 0 24px 8px #b3e5fc40, /* subtle blue reflection */
      0 0 10px rgba(0, 0, 0, 0.1)
    `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "1rem",
  };

  const iconStyle = {
    width: "1.5rem",
    height: "1.5rem",
    color: "rgba(0, 0, 0, 0.8)",
    transition: "transform 0.2s ease",
  };

  const iconContainer = {
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
  };

  return (
    <motion.nav
      style={navbarStyle}
      initial={{ boxShadow: navbarStyle.boxShadow }}
      animate={controls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={imageRoundBackground}>
          <img
            src="/Profile-Image.png"
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <span
          style={{
            fontFamily: "quicksand, sans-serif",
            WebkitTextStroke: "0.02rem #222222",
          }}
        >
          Richie Patil
        </span>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "1.5rem" }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={iconContainer}
        >
          <MotionFileText
            style={iconStyle}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </a>
        <a
          href="https://linkedin.com/in/richiepatil"
          target="_blank"
          rel="noopener noreferrer"
          style={iconContainer}
        >
          <MotionLinkedin
            style={iconStyle}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </a>
        <a
          href="https://instagram.com/richsochu"
          target="_blank"
          rel="noopener noreferrer"
          style={iconContainer}
        >
          <MotionInstagram
            style={iconStyle}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
