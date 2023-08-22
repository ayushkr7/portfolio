import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ayush</h1>
                <p className={styles.description}>
                    A full-stack developer with expertise in MERN stack and good
                    command over Data Structures and Algorithms.
                </p>
                <a
                    href="https://drive.google.com/file/d/11C8OYnm59Eh21StwyN_Du_3n2rzEl_zD/view?usp=sharing"
                    target="_blank"
                    className={styles.contactBtn}
                >
                    My Resume
                </a>
            </div>
            <img
                src={getImageUrl("hero/my-img.jpg")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
