import Image from "next/image";

import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <>
      <h2 className={styles.title}>Welcome to Urbint FE App</h2>
      <Image
        src="/assets/UrbintWordmarkSmall.svg"
        alt="Urbint Logo"
        width={200}
        height={80}
        priority
      />
    </>
  );
};

export { WelcomeMessage };
