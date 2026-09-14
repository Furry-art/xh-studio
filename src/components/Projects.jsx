import style from "../style/projects.module.scss";

const Projects = () => {
    return (
        <div className={style.projects}>
            <h2 className={style.title}>Проекты</h2>
            <div className={style.card}>
                <p className={style.text}>В разработке 😺</p>
                <p className={style.subtext}>Скоро здесь будут работы</p>
            </div>
        </div>
    );
};

export default Projects;