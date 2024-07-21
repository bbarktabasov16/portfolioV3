import cl from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={cl.preloader}>
      <div className={cl.container}>
        <img src="/logo.png" alt="Загрузка..." />
        <div className={cl.scale}></div>
      </div>
    </div>
  );
};

export default Preloader;
