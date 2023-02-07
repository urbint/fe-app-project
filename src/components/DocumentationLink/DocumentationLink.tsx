import styles from "./DocumentationLink.module.css";

const DocumentationLink = () => {
  return (
    <>
      <p className={styles.description}>
        For more information about folder structure, best practices and tools
        used check this link for more information:{" "}
      </p>
      <a href="https://github.com/urbint/fe-app-project#fe-template-app">
        Documentation
      </a>
    </>
  );
};

export { DocumentationLink };
